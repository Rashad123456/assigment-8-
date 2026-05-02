"use client";
import { useState } from "react";
import Link from "next/link";
import coursesData from "../../data/courses.json"; 

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 md:px-10 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Explore All Courses</h1>
      
      <div className="flex justify-center mb-12">
        <input 
          type="text" 
          placeholder="Search courses by title..." 
          className="input input-bordered w-full max-w-lg shadow-sm border-orange-200 focus:border-orange-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="card bg-base-100 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
              <figure><img src={course.image} alt={course.title} className="h-52 w-full object-cover" /></figure>
              <div className="card-body">
                <h2 className="card-title text-lg">{course.title}</h2>
                <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="badge badge-secondary bg-orange-100 text-orange-600 border-none font-semibold">
                    ⭐ {course.rating}
                  </div>
                  <Link href={`/courses/${course.id}`} className="btn btn-sm btn-primary bg-orange-500 hover:bg-orange-600 border-none text-white">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-10">
          <h3 className="text-2xl font-semibold">No courses found matching "{searchTerm}"</h3>
        </div>
      )}
    </div>
  );
}