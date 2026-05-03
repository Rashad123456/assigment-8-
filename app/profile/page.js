"use client";
import { useState } from "react";

export default function Profile() {
  // ডেমো ডেটা, আপনি চাইলে আপনার মতো পরিবর্তন করে নিতে পারেন
  const [name, setName] = useState("MD Hussain Kabir");
  const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80");

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center bg-slate-50 px-4 py-10">
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl w-full max-w-lg border border-slate-100">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">My Profile</h2>
          <p className="text-slate-500 mt-2 text-sm">Manage your personal information</p>
        </div>

        {/* Profile Picture Section */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="relative">
            {/* Glowing outer ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-rose-500 rounded-full blur-md opacity-60 scale-110"></div>
            
            {/* Image Wrapper (Makes it a perfect circle) */}
            <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-slate-100 z-10">
              <img 
                src={imageUrl} 
                alt="Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://ui-avatars.com/api/?name=MD+Hussain+Kabir&background=f97316&color=fff";
                }}
              />
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-slate-800 font-medium" 
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Profile Image URL</label>
            <input 
              type="url" 
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-slate-800 font-medium" 
            />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold py-4 mt-6 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-orange-500/30">
            Update Information
          </button>
        </form>

      </div>
    </div>
  );
}