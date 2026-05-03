"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "../../lib/auth-client";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    await authClient.signIn.email({
      email: email,
      password: password,
    }, {
      onSuccess: () => {
        // লগইন সফল হলে হোম পেজে পাঠিয়ে দেবে
        router.push("/");
      },
      onError: (ctx) => {
        // ভুল ইমেইল বা পাসওয়ার্ড দিলে এরর দেখাবে
        setError(ctx.error.message);
        setLoading(false);
      }
    });
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-slate-50 px-4 py-10">
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-md border border-slate-100">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">Welcome Back</h2>
          <p className="text-slate-500 mt-2 text-sm">Login to continue your learning journey</p>
        </div>

        {/* Error Message Box */}
        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl mb-6 text-sm font-semibold border border-red-100 text-center">
            {error}
          </div>
        )}
        
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com" 
              className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" 
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" 
              required 
            />
          </div>
          
          <button disabled={loading} type="submit" className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold py-3.5 rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-orange-500/30 mt-2 disabled:opacity-50 disabled:hover:scale-100">
            {loading ? "Logging in..." : "Login to SkillSphere"}
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-slate-600 font-medium">
          Don't have an account? <Link href="/register" className="text-orange-600 font-bold hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
}