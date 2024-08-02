import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex h-[90vh] w-full justify-center items-center">
      <div className="bg-white/5 p-4 w-4/5 backdrop-blur-md shadow-md">
        <h1 className="text-2xl text-center">Login</h1>
        <p className="text-center">Welcome back </p>

        <form action="" className="flex flex-col gap-y-2 mt-2">
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input
              className="w-full bg-white/10 p-2 border-none  focus:outline-blue-500 "
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <input
              className="w-full bg-white/10 p-2 border-none  focus:outline-blue-500 "
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 py-2 rounded text-white hover:bg-blue-700 mt-3"
          >
            Login
          </button>
        </form>
        <p className="text-center pt-2">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
