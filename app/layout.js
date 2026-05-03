import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "SkillSphere - Online Learning",
  description: "Upgrade your skills today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-black">
        {/* এই Navbar টি দিলে সব পেজেই লগআউট বাটন থাকবে */}
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer Section (Requirement অনুযায়ী) */}
        <footer className="bg-slate-900 text-slate-400 py-10 text-center">
          <p>© 2026 SkillSphere. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span> | 
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          </div>
        </footer>
      </body>
    </html>
  );
}