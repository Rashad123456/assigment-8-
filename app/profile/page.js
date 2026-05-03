"use client";
import { useState, useEffect } from "react";
import { authClient } from "../../lib/auth-client";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (session) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);
    await authClient.updateUser({
      name: name,
      image: image,
    }, {
      onSuccess: () => {
        setUpdating(false);
        alert("Profile updated successfully!");
        window.location.reload();
      }
    });
  };

  if (isPending) return <div className="text-center py-20 text-black font-bold">Loading Profile...</div>;
  if (!session) return <div className="text-center py-20 text-red-500 font-bold text-xl">Please login to view your profile!</div>;

  return (
    <div className="max-w-xl mx-auto my-16 px-6 text-black">
      <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-50">
        <h2 className="text-3xl font-black mb-8 text-center">My Profile</h2>
        
        <div className="flex flex-col items-center mb-10">
          {/* ছবি না থাকলে নামের প্রথম অক্ষর বড় করে দেখাবে */}
          <img 
            src={session.user.image ? session.user.image : `https://ui-avatars.com/api/?name=${session.user.name}&background=f97316&color=fff&size=128`} 
            className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-lg mb-4 object-cover" 
            alt="profile"
          />
          <h3 className="text-xl font-bold">{session.user.name}</h3>
          <p className="text-slate-400 text-sm italic">{session.user.email}</p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Display Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-2xl border bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Profile Image URL</label>
            <input 
              type="text" 
              value={image} 
              onChange={(e) => setImage(e.target.value)}
              placeholder="Paste any image link here"
              className="w-full p-4 rounded-2xl border bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />
          </div>
          <button 
            type="submit" 
            disabled={updating}
            className="w-full bg-orange-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-orange-200 hover:scale-[1.02] transition-all disabled:opacity-50"
          >
            {updating ? "Updating..." : "Update Information"}
          </button>
        </form>
      </div>
    </div>
  );
}