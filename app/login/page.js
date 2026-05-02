"use client";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-slate-50 px-4 py-10">
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-md border border-slate-100">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">Welcome Back</h2>
          <p className="text-slate-500 mt-2 text-sm">Login to continue your learning journey</p>
        </div>
        
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="email@example.com" 
              className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" 
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" 
              required 
            />
          </div>
          
          <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold py-3.5 rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-orange-500/30 mt-2">
            Login to SkillSphere
          </button>
        </form>

        <div className="flex items-center my-8">
          <div className="flex-1 border-t border-slate-200"></div>
          <span className="px-4 text-sm text-slate-400 font-medium">OR</span>
          <div className="flex-1 border-t border-slate-200"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-100 text-slate-700 font-bold py-3.5 rounded-xl hover:bg-slate-50 hover:border-slate-200 transition-all">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <p className="text-center mt-8 text-sm text-slate-600 font-medium">
          Don't have an account? <Link href="/register" className="text-orange-600 font-bold hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
}