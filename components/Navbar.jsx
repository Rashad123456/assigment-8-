return (
  <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md sticky top-0 z-50 text-black">
    {/* Logo */}
    <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
      SkillSphere
    </Link>

    <div className="flex items-center gap-6">
      <Link href="/" className="font-semibold text-slate-600">Home</Link>
      
      {session ? (
        <div className="flex items-center gap-4">
          <img 
            src={session.user.image || `https://ui-avatars.com/api/?name=${session.user.name}`} 
            alt="Profile" 
            className="w-9 h-9 rounded-full border"
          />
          <button 
            onClick={handleLogout}
            className="bg-slate-800 text-white px-5 py-2 rounded-xl text-sm font-bold"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link 
          href="/login" 
          className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-7 py-2.5 rounded-xl font-bold"
        >
          Login
        </Link>
      )}
    </div>
  </nav>
);