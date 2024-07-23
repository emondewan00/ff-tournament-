"use client";

const dataName = {
  totalPrize: "total prize",
  perKill: "per kill",
  1: "winner",
  2: "2nd position",
  3: "3rd position",
  4: "4th position",
  5: "5th position",
  6: "6th position",
  7: "7th position",
  8: "8th position",
  9: "9th position",
  10: "10th position",
};

const TotalPrize = ({ onClose, prizeDetails, title }) => {
  let content = [];

  for (let key in prizeDetails) {
    content.push(
      <p className="capitalize">
        {dataName[key]}: {prizeDetails[key]} Tk
      </p>
    );
  }

  return (
    <div
      onClick={onClose}
      className="bg-black/30 h-full w-full absolute top-0 left-0 z-[1000] flex justify-center items-center cursor-pointer"
    >
      <div className="size-60 fixed bottom-12">
        <div className="bg-yellow-400 text-white py-2 text-center">
          <h3 className="">Prize Pool</h3>
          <p className="text-sm capitalize truncate">{title}</p>
        </div>
        <div className="px-4 py-2 bg-white text-gray-500 ">
          {content.sort().map((item) => item)}
        </div>
      </div>
    </div>
  );
};

export default TotalPrize;
