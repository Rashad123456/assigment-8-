"use client";

export default function Profile() {
  return (
    <div className="container mx-auto p-6 md:p-10 flex justify-center mt-10">
      <div className="card w-full max-w-lg shadow-2xl bg-base-100 border border-gray-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">My Profile</h2>
          
          <div className="flex justify-center mb-6">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2">
                <img src="https://i.pravatar.cc/150?img=11" alt="Profile" />
              </div>
            </div>
          </div>

          <form>
            <div className="form-control mb-4">
              <label className="label"><span className="label-text font-semibold">Full Name</span></label>
              <input type="text" className="input input-bordered" defaultValue="MD Hussain Kabir" required />
            </div>

            <div className="form-control mb-6">
              <label className="label"><span className="label-text font-semibold">Profile Image URL</span></label>
              <input type="url" className="input input-bordered" defaultValue="https://i.pravatar.cc/150?img=11" required />
            </div>

            <button type="submit" className="btn btn-primary w-full bg-orange-500 hover:bg-orange-600 border-none text-white">
              Update Information
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}