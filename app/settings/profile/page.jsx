const Profile = () => {
  return (
    <div className="max-w-md mx-auto pb-32">
      <div className="max-w-md mx-auto text-white">
        <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm">
          <h2 className="text-lg font-semibold mb-2">Edit Profile</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-sm font-medium mb-1"
                for="first-name"
              >
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                value="Foysal"
                className="w-full p-2 outline-none focus:outline-blue-500 rounded bg-white/10 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" for="last-name">
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                value="Vai"
                className="w-full p-2 outline-none focus:outline-blue-500 rounded bg-white/10 "
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" for="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value="FOYSALVAI"
              className="w-full p-2 outline-none focus:outline-blue-500 rounded bg-white/10 "
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" for="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value="vaifoysal6@gmail.com"
              className="w-full p-2 outline-none focus:outline-blue-500 rounded bg-white/10 "
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" for="phone">
              Mobile Number
            </label>
            <input
              id="phone"
              type="tel"
              value="01608003586"
              className="w-full p-2 outline-none focus:outline-blue-500 rounded bg-white/10 "
            />
          </div>
          <button className="w-full bg-blue-500 py-2 rounded hover:bg-blue-500/80 transition-all delay-150">
            Save
          </button>
        </div>
        <div className="p-4 bg-white/10 backdrop-blur-sm">
          <h2 className="text-lg font-semibold mb-2">Change Password</h2>
          <div className="mb-4 relative">
            <label
              className="block text-sm font-medium mb-1"
              for="old-password"
            >
              Old Password
            </label>
            <input
              id="old-password"
              type="password"
              className="w-full p-2 outline-none focus:outline-blue-500 rounded bg-white/10 "
            />
            <button className="absolute right-2 top-2">
              <img
                aria-hidden="true"
                alt="eye-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=👁️"
              />
            </button>
          </div>
          <div className="mb-4 relative">
            <label
              className="block text-sm font-medium mb-1"
              for="new-password"
            >
              New Password
            </label>
            <input
              id="new-password"
              type="password"
              className="w-full p-2 outline-none focus:outline-blue-500 rounded bg-white/10 "
            />
            <button className="absolute right-2 top-2">
              <img
                aria-hidden="true"
                alt="eye-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=👁️"
              />
            </button>
          </div>
          <div className="mb-4 relative">
            <label
              className="block text-sm font-medium mb-1"
              for="confirm-password"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              className="w-full p-2 outline-none focus:outline-blue-500 rounded bg-white/10 "
            />
            <button className="absolute right-2 top-2">
              <img
                aria-hidden="true"
                alt="eye-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=👁️"
              />
            </button>
          </div>
          <button className="w-full bg-blue-500 py-2 rounded hover:bg-blue-500/80 transition-all delay-150">
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
