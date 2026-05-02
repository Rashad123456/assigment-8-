import Link from "next/link";
import coursesData from "../data/courses.json";

export default function Home() {
  const popularCourses = coursesData.sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="container mx-auto px-4 md:px-10 pb-12">
      {/* 100% Pure Tailwind Hero Section - No DaisyUI Conflicts */}
      <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-20 mt-4 bg-slate-900 border border-slate-800">
        
        {/* Background Gradient & Glow Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/20 rounded-full blur-[100px] z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] py-20 px-4 text-center">
          
          {/* Beautiful Custom Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 shadow-lg">
            <span className="text-base">🚀</span>
            <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.2em]">The Future of Learning</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl">
            Master New Skills <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
              Shape Your Future
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of students learning from top industry experts. Explore premium courses in Web Development, Design, Marketing, and more.
          </p>

          {/* Premium Button */}
          <Link href="/courses" className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.6)]">
            Explore All Courses
          </Link>
        </div>
      </div>

      {/* Popular Courses Section */}
      <section className="mb-16">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">🔥 Top Rated Courses</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {popularCourses.map((course) => (
            <div key={course.id} className="flex flex-col bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-slate-100 group overflow-hidden">
              <div className="relative overflow-hidden h-64">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-orange-600 shadow-sm flex items-center gap-1">
                  ⭐ {course.rating}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-3">{course.category}</div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3 leading-snug group-hover:text-orange-500 transition-colors line-clamp-2">{course.title}</h2>
                <p className="text-slate-500 text-sm mb-8 flex-grow">Instructor: <span className="font-medium text-slate-700">{course.instructor}</span></p>
                <Link href={`/courses/${course.id}`} className="block text-center w-full bg-slate-50 hover:bg-gradient-to-r hover:from-orange-500 hover:to-rose-500 hover:text-white text-slate-700 font-bold py-3.5 rounded-xl transition-all duration-300">
                  View Course Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}