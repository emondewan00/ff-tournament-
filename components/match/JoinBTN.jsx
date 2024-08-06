"use client";

import { useState } from "react";
import JoinForm from "../matches/JoinForm";
import { createPortal } from "react-dom";

const JoinBTN = ({ isClosed, isJoined, id }) => {
  const [joinPopUp, setJoinPopUp] = useState(false);

  const onCloseJoinPopUp = () => setJoinPopUp(false);
  const onClickJoin = () => {
    if (isClosed || isJoined) return null;
    setJoinPopUp(true);
  };

  return (
    <>
      <button
        onClick={onClickJoin}
        className="w-full bg-green-500 text-white py-2 rounded-md font-bold"
      >
        {isClosed ? "Closed" : isJoined ? "Joined" : "Join Now"}
      </button>
      {joinPopUp &&
        createPortal(
          <JoinForm onClose={onCloseJoinPopUp} id={id} />,
          document.querySelector(".modal")
        )}
    </>
  );
};

export default JoinBTN;
