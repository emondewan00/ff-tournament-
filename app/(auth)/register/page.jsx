import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="flex h-[88vh] w-full justify-center items-center">
      <div className="bg-white/5 p-4 w-4/5 backdrop-blur-md shadow-md">
        <h1 className="text-2xl text-center">Register</h1>

        <form action="" className="flex flex-col gap-y-2 mt-2">
          <div className="grid grid-cols-2 gap-4 mb-2">
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

          <div className="mb-2">
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
          <div className="mb-2">
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
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1" for="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 outline-none focus:outline-blue-500 rounded bg-white/10"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 py-2 rounded text-white hover:bg-blue-700"
          >
            Register
          </button>
        </form>
        <p className="mt-2">
          Already have an account ?{" "}
          <Link href="/login" className="text-blue-500">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
