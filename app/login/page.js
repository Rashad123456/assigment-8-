"use client";
import Link from "next/link";
import { useState } from "react";
import { authClient } from "../../lib/auth-client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    await authClient.signIn.email({ email, password }, {
      onSuccess: () => { window.location.href = "/"; },
      onError: (ctx) => { setError(ctx.error.message); setLoading(false); }
    });
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: "/" });
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-slate-50 px-4 py-10 text-black">
      <div className="bg-white p-10 rounded-[35px] shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-black text-center mb-8">Login</h2>
        {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm text-center font-bold italic">⚠️ {error}</div>}
        
        <form className="space-y-5" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" className="w-full p-4 rounded-xl border" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" className="w-full p-4 rounded-xl border" onChange={(e) => setPassword(e.target.value)} required />
          <button disabled={loading} className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold shadow-lg">Login</button>
        </form>

        <div className="relative my-8"><hr/><span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-slate-400 text-xs font-bold uppercase">OR</span></div>

        <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 border-2 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-all">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5" alt="google" />
          Continue with Google
        </button>

        <p className="text-center mt-8 text-sm font-medium">New here? <Link href="/register" className="text-orange-600 font-bold">Register Now</Link></p>
      </div>
    </div>
  );
}