const Profile = () => {
  return (
    <div className="max-w-md mx-auto pb-32">
      <div class="max-w-md mx-auto bg-white/5 p-6 rounded-lg shadow-md text-white">
        <div class="mb-6">
          <h2 class="text-lg font-semibold mb-2">Edit Profile</h2>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-sm font-medium mb-1" for="first-name">
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                value="Foysal"
                class="w-full p-2 outline-none focus:outline-blue-500 rounded bg-white/10 "
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1" for="last-name">
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                value="Vai"
                class="w-full p-2 outline-none focus:outline-blue-500 rounded bg-white/10 "
              />
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1" for="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value="FOYSALVAI"
              class="w-full p-2 outline-none focus:outline-blue-500 rounded bg-white/10 "
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1" for="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value="vaifoysal6@gmail.com"
              class="w-full p-2 outline-none focus:outline-blue-500 rounded bg-white/10 "
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1" for="phone">
              Mobile Number
            </label>
            <input
              id="phone"
              type="tel"
              value="01608003586"
              class="w-full p-2 outline-none focus:outline-blue-500 rounded bg-white/10 "
            />
          </div>
          <button class="w-full bg-blue-500 py-2 rounded hover:bg-blue-500/80 transition-all delay-150">
            Save
          </button>
        </div>
        <div>
          <h2 class="text-lg font-semibold mb-2">Change Password</h2>
          <div class="mb-4 relative">
            <label class="block text-sm font-medium mb-1" for="old-password">
              Old Password
            </label>
            <input
              id="old-password"
              type="password"
              class="w-full p-2 outline-none focus:outline-blue-500 rounded bg-white/10 "
            />
            <button class="absolute right-2 top-2">
              <img
                aria-hidden="true"
                alt="eye-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=👁️"
              />
            </button>
          </div>
          <div class="mb-4 relative">
            <label class="block text-sm font-medium mb-1" for="new-password">
              New Password
            </label>
            <input
              id="new-password"
              type="password"
              class="w-full p-2 outline-none focus:outline-blue-500 rounded bg-white/10 "
            />
            <button class="absolute right-2 top-2">
              <img
                aria-hidden="true"
                alt="eye-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=👁️"
              />
            </button>
          </div>
          <div class="mb-4 relative">
            <label
              class="block text-sm font-medium mb-1"
              for="confirm-password"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              class="w-full p-2 outline-none focus:outline-blue-500 rounded bg-white/10 "
            />
            <button class="absolute right-2 top-2">
              <img
                aria-hidden="true"
                alt="eye-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=👁️"
              />
            </button>
          </div>
          <button class="w-full bg-blue-500 py-2 rounded hover:bg-blue-500/80 transition-all delay-150">
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
