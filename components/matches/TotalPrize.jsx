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
    <div className="bg-black/30 h-full w-full absolute top-0 left-0 z-[1000] flex justify-center items-center ">
      <div className=" fixed bottom-12 ">
        <div
          onClick={onClose}
          className="size-8 rounded-full text-xl font-bold text-gray-600 bg-white flex items-center justify-center mx-auto mb-4 hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-150 delay-100 ease-linear cursor-pointer"
        >
          x
        </div>
        <div className="bg-yellow-400 text-white py-2 text-center px-4 w-60">
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
