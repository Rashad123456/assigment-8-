"use client";
import Link from "next/link";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut({
      onSuccess: () => {
        window.location.reload();
      },
    });
  };

  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md sticky top-0 z-50 text-black">
      <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
        SkillSphere
      </Link>

      <div className="hidden md:flex gap-8 items-center font-semibold text-slate-600">
        <Link href="/" className="hover:text-orange-600 transition-all">Home</Link>
        <Link href="/courses" className="hover:text-orange-600 transition-all">Courses</Link>
        <Link href="/profile" className="hover:text-orange-600 transition-all">My Profile</Link>
      </div>

      <div className="flex items-center">
        {isPending ? (
          <div className="w-10 h-10 rounded-full bg-slate-100 animate-pulse"></div>
        ) : session ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-50 p-1.5 pr-4 rounded-full border">
              
              <img 
                src={session.user.image ? session.user.image : `https://ui-avatars.com/api/?name=${session.user.name}&background=f97316&color=fff`} 
                className="w-9 h-9 rounded-full object-cover" 
                alt="profile" 
              />
              <span className="text-sm font-bold text-slate-700 hidden sm:inline">{session.user.name.split(' ')[0]}</span>
            </div>
            <button onClick={handleLogout} className="bg-slate-800 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-black transition-all">
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-7 py-2.5 rounded-xl font-bold shadow-lg shadow-orange-500/20 hover:scale-105 transition-all">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}