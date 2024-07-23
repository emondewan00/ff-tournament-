"use client";
const JoinForm = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="bg-black/30 h-full w-full absolute top-0 left-0 z-[1000] flex justify-center items-center cursor-pointer "
    >
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-60 text-black p-4">
        <form action="" className="space-y-4">
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
