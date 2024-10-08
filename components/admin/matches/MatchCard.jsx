import Link from "next/link";

const MatchCard = ({ match }) => {
  const {
    _id,
    title,
    version,
    schedule,
    prizeDetails,
    entryFee,
    map,
    type,
    totalSlots,
    participants,
  } = match;
  const matchTitle =
    title +
    " | " +
    version +
    " | " +
    _id.toString().slice(18, 24)?.toUpperCase();
  const matchSchedule = new Date(schedule).toLocaleString();

  const progress = (100 / totalSlots) * participants.length;

  return (
    <div className="bg-white/5 rounded-lg p-4 mb-4 text-white relative   match-card border-transparent border-2 ">
      <div className="flex items-center mb-2">
        <img
          src="https://placehold.co/50x50"
          alt="match image"
          className="w-12 h-12 rounded-full mr-2"
        />
        <div>
          <h2 className="text-lg font-semibold capitalize">{matchTitle}</h2>
          <p className="text-sm text-red-500">Time: {matchSchedule}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 text-sm mb-2">
        <div>
          <p className="font-semibold">TOTAL PRIZE</p>
          <p>৳{prizeDetails?.totalPrize}</p>
        </div>
        <div>
          <p className="font-semibold">PER KILL</p>
          <p>৳{prizeDetails?.perKill}</p>
        </div>
        <div>
          <p className="font-semibold">ENTRY FEE</p>
          <p>৳{entryFee}</p>
        </div>
        <div>
          <p className="font-semibold">MAP</p>
          <p className="capitalize">{map}</p>
        </div>
        <div>
          <p className="font-semibold">TYPE</p>
          <p className="capitalize">{type}</p>
        </div>
        <div>
          <p className="font-semibold">VERSION</p>
          <p className="capitalize">{version}</p>
        </div>
      </div>
      <div className="flex gap-x-4 my-2 items-center">
        <div className="bg-white/10 h-2 w-full rounded">
          <div
            className="bg-gradient-to-l  from-red-500 w-full h-full rounded progress-bar"
            style={{
              "--progress": `${progress}%`,
            }}
          ></div>
        </div>
        <p className="text-white min-w-10 bg-pink">
          {participants?.length}/{totalSlots}
        </p>
      </div>
      <div className="flex justify-between">
        <button className="bg-indigo-600 text-white py-2 px-4 rounded shadow-md relative z-50 hover:scale-105 delay-200 duration-300 transition-all ease-linear hover:bg-indigo-600/80 ">
          Edit Match
        </button>
        <Link
          href={`/admin/match-result/${_id}`}
          className="bg-green-500 text-white py-2 px-4 rounded relative z-50 hover:scale-105 delay-200 duration-300 transition-all ease-linear hover:bg-green-500/80"
        >
          Results
        </Link>
      </div>
    </div>
  );
};

export default MatchCard;
