"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import TotalPrize from "./TotalPrize";

const JoinAndDetailsBTN = ({ prizeDetails, title }) => {
  const [joinPopUp, setJoinPopUp] = useState(false);
  const [totalPrize, setTotalPrize] = useState(false);
  const onCloseJoinPopUp = () => setJoinPopUp(false);
  return (
    <>
      <div class="flex justify-between">
        <button
          onClick={() => setTotalPrize(true)}
          class="bg-indigo-600 text-white py-2 px-4 rounded shadow-md relative z-50 hover:scale-105 delay-200 duration-300 transition-all ease-linear hover:bg-indigo-600/80 "
        >
          Total Prize
        </button>
        {totalPrize &&
          createPortal(
            <TotalPrize
              prizeDetails={prizeDetails}
              title={title}
              onClose={() => setTotalPrize(false)}
            />,
            document.querySelector(".modal")
          )}

        <button
          onClick={() => setJoinPopUp(!joinPopUp)}
          class="bg-green-500 text-white py-2 px-4 rounded relative z-50 hover:scale-105 delay-200 duration-300 transition-all ease-linear hover:bg-green-500/80"
        >
          Join Now
        </button>
      </div>
    </>
  );
};

export default JoinAndDetailsBTN;
