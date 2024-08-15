"use client";

import { joinInMatch } from "@/actions/joinInMatch";
import { useSession } from "next-auth/react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaMinus } from "react-icons/fa";

const JoinForm = ({ onClose, id }) => {
  const {
    data: { user },
    status,
  } = useSession();

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      players: [
        {
          username: 0,
        },
      ],
      matchId: id,
      userId: user?.id,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "players",
  });

  const onSubmit = async (data) => {
    console.log(data);
    // const formData = new FormData(e.target);
    // const result = await joinInMatch(formData);
    // if (result?.success) {
    //   onClose();
    //   toast.success(result.message);
    // } else {
    //   onClose();
    //   toast.error(result.message);
    // }
  };

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
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-60 p-4 bg-white rounded"
        >
          <h1>Players User Name </h1>

          {fields.map((field, index) => {
            return (
              <div key={field.id} className="flex">
                <input
                  type="text"
                  name={field.username}
                  placeholder="Player user name"
                  className="p-2 bg-slate-100 border border-r-0 border-blue-500  focus:outline focus:outline-blue-500 w-full"
                />

                <button
                  type="button"
                  onClick={() => index !== 0 && remove(index)}
                  className="w-10  py-2 rounded-r cursor-pointer duration-100 delay-75 transition-all ease-linear bg-red-500 text-white font-bold grid place-items-center"
                >
                  <FaMinus />
                </button>
              </div>
            );
          })}

          {fields.length < 4 && (
            <button
              type="button"
              onClick={() => append({ username: fields.length })}
              className="w-full bg-blue-600 py-2 rounded text-white cursor-pointer hover:bg-blue-700 duration-100 delay-75 transition-all ease-linear "
            >
              Add Name
            </button>
          )}

          <input type="hidden" name="matchId" value={id} />
          <input type="hidden" name="userId" value={user?.id} />
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
