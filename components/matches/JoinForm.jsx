"use client";

import { joinInMatch } from "@/actions/joinInMatch";
import { useSession } from "next-auth/react";

const JoinForm = ({ onClose, id }) => {
  const {
    data: { user },
    status,
  } = useSession();

  return (
    <div className="bg-black/30 h-full w-full absolute top-0 left-0 z-[1000] flex justify-center items-center  ">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-black ">
        <div
          onClick={onClose}
          className="size-8 rounded-full text-xl font-bold text-gray-600 bg-white flex items-center justify-center mx-auto mb-4 hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-150 delay-100 ease-linear cursor-pointer"
        >
          x
        </div>

        <form
          action={joinInMatch}
          className="space-y-4 w-60 p-4 bg-white rounded"
        >
          <h1>User info </h1>
          <input
            type="text"
            name="gameIdName"
            placeholder="Enter your user name"
            className="p-2 bg-slate-100 border border-blue-500  focus:outline focus:outline-blue-500 w-full"
          />
          <input type="hidden" name="matchId" value={id} />
          <input type="hidden" name="userId" value={user.id} />
          <input
            type="submit"
            value="Join"
            className="w-full bg-blue-600 py-2 rounded text-white cursor-pointer hover:bg-blue-700 duration-100 delay-75 transition-all ease-linear "
          />
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
