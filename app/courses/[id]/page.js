"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { authClient } from "../../../lib/auth-client";
import Link from "next/link";
import coursesData from "../../../data/courses.json"; // 🌟 সরাসরি ইম্পোর্ট (ম্যাজিক ফিক্স)

export default function CourseDetails() {
  const params = useParams();
  const router = useRouter();
  
  const { data: session, isPending } = authClient.useSession();
  const [course, setCourse] = useState(null);

  // Authentication চেক
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  // Course ডেটা খোঁজা
  useEffect(() => {
    if (params?.id) {
      const foundCourse = coursesData.find((c) => c.id.toString() === params.id);
      setCourse(foundCourse);
    }
  }, [params]);

  if (isPending) return <div className="text-center py-20 font-bold text-black text-xl">Checking Authentication...</div>;
  if (!session) return null; 
  if (!course) return <div className="text-center py-20 font-bold text-red-500 text-2xl">Course Not Found!</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-black">
      <Link href="/courses" className="text-orange-600 font-bold hover:underline mb-6 inline-block">
        ← Back to Courses
      </Link>
      <img src={course.image} alt={course.title} className="w-full h-[400px] object-cover rounded-3xl mb-8 shadow-lg" />
      
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
        <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase">{course.category}</span>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-6 mb-4">{course.title}</h1>
        <p className="text-lg text-slate-500 mb-8 border-b pb-8">Instructor: <span className="font-bold text-slate-800">{course.instructor}</span></p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-slate-50 px-4 py-4 rounded-2xl text-center">
            <p className="text-xs text-slate-400 font-bold uppercase mb-1">Duration</p>
            <p className="font-bold text-lg">{course.duration}</p>
          </div>
          <div className="bg-slate-50 px-4 py-4 rounded-2xl text-center">
            <p className="text-xs text-slate-400 font-bold uppercase mb-1">Level</p>
            <p className="font-bold text-lg">{course.level}</p>
          </div>
          <div className="bg-slate-50 px-4 py-4 rounded-2xl text-center">
            <p className="text-xs text-slate-400 font-bold uppercase mb-1">Rating</p>
            <p className="font-bold text-orange-600 text-lg">⭐ {course.rating}</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4">Course Description</h3>
        <p className="text-slate-600 mb-10 leading-relaxed text-lg">{course.description}</p>

        <h3 className="text-2xl font-bold mb-6">Course Curriculum</h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl text-lg font-medium border border-slate-100"><span className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">1</span> Introduction & Setup</li>
          <li className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl text-lg font-medium border border-slate-100"><span className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">2</span> Core Concepts & Fundamentals</li>
          <li className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl text-lg font-medium border border-slate-100"><span className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">3</span> Advanced Techniques</li>
          <li className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl text-lg font-medium border border-slate-100"><span className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">4</span> Final Project Implementation</li>
        </ul>
      </div>
    </div>
  );
}