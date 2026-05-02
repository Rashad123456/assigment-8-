"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import coursesData from "../../../data/courses.json"; 

export default function CourseDetails({ params }) {
  const router = useRouter();
  
  // Next.js এর নতুন নিয়ম অনুযায়ী params কে unwrap করা হলো
  const unwrappedParams = use(params);
  
  const [isAuthenticated, setIsAuthenticated] = useState(true); 

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null; 

  // এখন unwrappedParams থেকে id নেওয়া হচ্ছে
  const course = coursesData.find((c) => c.id.toString() === unwrappedParams.id);

  if (!course) {
    return <div className="min-h-[60vh] flex items-center justify-center text-3xl font-bold text-gray-500">Course Not Found!</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-10 py-10">
      <div className="card lg:card-side bg-base-100 shadow-xl border border-gray-100 overflow-hidden">
        <figure className="lg:w-1/2">
          <img src={course.image} alt={course.title} className="h-full w-full object-cover min-h-[300px]" />
        </figure>
        <div className="card-body lg:w-1/2 p-8">
          <div className="badge badge-secondary bg-orange-100 text-orange-600 border-none mb-2 font-semibold">
            {course.category}
          </div>
          <h2 className="card-title text-3xl font-bold mb-4 text-gray-800">{course.title}</h2>
          <p className="text-gray-600 text-lg mb-6">{course.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-sm text-gray-500">Instructor</p>
              <p className="font-bold text-gray-800">{course.instructor}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-sm text-gray-500">Duration</p>
              <p className="font-bold text-gray-800">{course.duration}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-sm text-gray-500">Rating</p>
              <p className="font-bold text-gray-800">⭐ {course.rating}</p>
            </div>
          </div>

          <div className="card-actions justify-end mt-auto">
            <button className="btn btn-primary w-full bg-orange-500 hover:bg-orange-600 border-none text-white text-lg h-12">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}