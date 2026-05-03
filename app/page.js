"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-black">
      {/* Hero Section with Animation */}
      <section className="bg-slate-900 text-white py-24 px-6 text-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Upgrade Your Skills Today <span className="text-orange-500">🚀</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10">
            Learn from Industry Experts and take your career to the next level with SkillSphere.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/courses" className="bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-orange-500/30">
              Explore Courses
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800">🔥 Popular Courses</h2>
          <p className="text-slate-500 mt-2">Our top-rated courses picked for you</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dummy Course Card 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:-translate-y-2 transition-all">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80" alt="Web Dev" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Complete Web Development</h3>
              <p className="text-slate-500 text-sm mb-4">Instructor: John Doe</p>
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-orange-600">⭐ 4.8</span>
              </div>
              <Link href="/courses" className="block text-center bg-slate-100 text-slate-800 py-2.5 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-colors">View Details</Link>
            </div>
          </div>
          {/* Dummy Course Card 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:-translate-y-2 transition-all">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" alt="UI UX" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">UI/UX Design Masterclass</h3>
              <p className="text-slate-500 text-sm mb-4">Instructor: Jane Smith</p>
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-orange-600">⭐ 4.9</span>
              </div>
              <Link href="/courses" className="block text-center bg-slate-100 text-slate-800 py-2.5 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-colors">View Details</Link>
            </div>
          </div>
          {/* Dummy Course Card 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:-translate-y-2 transition-all">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="Data Science" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Data Science for Beginners</h3>
              <p className="text-slate-500 text-sm mb-4">Instructor: Albert E.</p>
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-orange-600">⭐ 4.7</span>
              </div>
              <Link href="/courses" className="block text-center bg-slate-100 text-slate-800 py-2.5 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-colors">View Details</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section: Top Instructors */}
      <section className="bg-white py-20 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-12">🏆 Top Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6"><img src="https://ui-avatars.com/api/?name=John+Doe&size=128" className="rounded-full mx-auto mb-4 border-4 border-orange-100" /><h3 className="font-bold text-xl">John Doe</h3><p className="text-slate-500">Web Developer</p></div>
            <div className="p-6"><img src="https://ui-avatars.com/api/?name=Jane+Smith&size=128" className="rounded-full mx-auto mb-4 border-4 border-orange-100" /><h3 className="font-bold text-xl">Jane Smith</h3><p className="text-slate-500">UI/UX Designer</p></div>
            <div className="p-6"><img src="https://ui-avatars.com/api/?name=Albert+E&size=128" className="rounded-full mx-auto mb-4 border-4 border-orange-100" /><h3 className="font-bold text-xl">Albert E.</h3><p className="text-slate-500">Data Scientist</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}