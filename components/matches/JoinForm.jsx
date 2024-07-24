"use client";
const JoinForm = ({ onClose }) => {
  return (
    <div className="bg-black/30 h-full w-full absolute top-0 left-0 z-[1000] flex justify-center items-center  ">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-black ">
        <div
          onClick={onClose}
          className="size-8 rounded-full text-xl font-bold text-gray-600 bg-white flex items-center justify-center mx-auto mb-4 hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-150 delay-100 ease-linear cursor-pointer"
        >
          x
        </div>

        <form action="" className="space-y-4 w-60 p-4 bg-white">
          {/* <label htmlFor="userName">User Name</label> */}
          <h1>User info </h1>
          <input
            type="text"
            placeholder="Enter your user name"
            className="p-2 bg-slate-100 border border-blue-500  focus:outline focus:outline-blue-500 "
          />
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
