import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "SkillSphere - Premium Learning",
  description: "Upgrade Your Skills Today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 tracking-wide">
        
        {/* 100% Pure Tailwind Navbar */}
        <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 md:px-10">
            <div className="flex items-center justify-between h-20">
              
              {/* Logo */}
              <Link href="/" className="text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
                SkillSphere
              </Link>

              {/* Menu & Login Button */}
              <div className="flex items-center gap-8">
                
                {/* Navigation Links */}
                <ul className="hidden md:flex flex-row items-center gap-8 font-semibold text-slate-600">
                  <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
                  <li><Link href="/courses" className="hover:text-orange-500 transition-colors">Courses</Link></li>
                  <li><Link href="/profile" className="hover:text-orange-500 transition-colors">My Profile</Link></li>
                </ul>
                
                {/* Login Button */}
                <Link href="/login" className="px-8 py-3 text-sm font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-orange-500 to-rose-500 hover:shadow-orange-500/40 hover:scale-105">
                  Login
                </Link>
                
              </div>

            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow pt-6">
          {children}
        </main>

        {/* Professional Footer */}
        <footer className="w-full py-12 mt-16 bg-slate-900 text-slate-300 border-t-4 border-orange-500">
          <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h6 className="text-xl font-bold text-white mb-4">SkillSphere Platform</h6>
              <p className="font-semibold text-orange-400 mb-2">Powered by Pioneer Educational Family</p>
              <p className="text-sm">123 Learning Street, Dhaka</p>
              <p className="text-sm">contact@skillsphere.com</p>
            </div>
            <div>
              <h6 className="text-xl font-bold text-white mb-4">Legal Info</h6>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-orange-400 transition-colors">Terms of use</Link></li>
                <li><Link href="#" className="hover:text-orange-400 transition-colors">Privacy policy</Link></li>
              </ul>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}