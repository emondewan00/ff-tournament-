"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import TotalPrize from "./TotalPrize";
import JoinForm from "./JoinForm";

const JoinAndDetailsBTN = ({ prizeDetails, title, isClosed, isJoined, id }) => {
  const [joinPopUp, setJoinPopUp] = useState(false);
  const [totalPrize, setTotalPrize] = useState(false);
  const onCloseJoinPopUp = () => setJoinPopUp(false);

  const onClickJoin = () => {
    if (isClosed || isJoined) return null;
    setJoinPopUp(true);
  };

  return (
    <>
      <div className="flex justify-between">
        <button
          onClick={() => setTotalPrize(true)}
          className="border text-white py-2 px-4 rounded shadow-md relative z-50 hover:scale-105 delay-200 duration-300 transition-all ease-linear hover:bg-indigo-600/80 "
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
          onClick={onClickJoin}
          className="bg-green-500 text-white py-2 px-4 rounded relative z-50 hover:scale-105 delay-200 duration-300 transition-all ease-linear "
        >
          {isClosed ? "Closed" : isJoined ? "Joined" : "Join Now"}
        </button>
        {joinPopUp &&
          createPortal(
            <JoinForm onClose={onCloseJoinPopUp} id={id} />,
            document.querySelector(".modal")
          )}
      </div>
    </>
  );
};

export default JoinAndDetailsBTN;
