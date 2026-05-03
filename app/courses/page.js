"use client";
import { useState } from "react";
import Link from "next/link";
import coursesData from "../../data/courses.json"; // 🌟 সরাসরি ইম্পোর্ট

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-black">
      <h1 className="text-4xl font-extrabold mb-8 text-center">All Courses</h1>
      
      <div className="mb-12 flex justify-center">
        <input 
          type="text" 
          placeholder="Search by course title..." 
          className="w-full max-w-lg p-4 rounded-2xl border-2 border-slate-200 focus:border-orange-500 outline-none transition-all shadow-sm"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase">{course.category}</span>
              <h3 className="text-xl font-bold mt-3 mb-2">{course.title}</h3>
              <p className="text-slate-500 text-sm mb-4">Instructor: {course.instructor}</p>
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-orange-600">⭐ {course.rating}</span>
                <span className="text-slate-400 text-sm">{course.duration}</span>
              </div>
              <Link href={`/courses/${course.id}`} className="block text-center bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-black">
                View Details
              </Link>
            </div>
          </div>
        ))}
        {filteredCourses.length === 0 && (
          <p className="col-span-full text-center text-slate-500 font-bold text-lg">No courses found with that name.</p>
        )}
      </div>
    </div>
  );
}