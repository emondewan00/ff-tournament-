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
    <div class="bg-white/5 rounded-lg p-4 mb-4 text-white relative   match-card  ">
      <Link
        href={`/game/${_id}`}
        className="absolute top-0 left-0 w-full h-full"
      ></Link>
      <div class="flex items-center mb-2">
        <img
          src="https://placehold.co/50x50"
          alt="match image"
          class="w-12 h-12 rounded-full mr-2"
        />
        <div>
          <h2 class="text-lg font-semibold capitalize">{matchTitle}</h2>
          <p class="text-sm text-red-500">Time: {matchSchedule}</p>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2 text-sm mb-2">
        <div>
          <p class="font-semibold">TOTAL PRIZE</p>
          <p>৳{prizeDetails?.totalPrize}</p>
        </div>
        <div>
          <p class="font-semibold">PER KILL</p>
          <p>৳{prizeDetails?.perKill}</p>
        </div>
        <div>
          <p class="font-semibold">ENTRY FEE</p>
          <p>৳{entryFee}</p>
        </div>
        <div>
          <p class="font-semibold">MAP</p>
          <p className="capitalize">{map}</p>
        </div>
        <div>
          <p class="font-semibold">TYPE</p>
          <p className="capitalize">{type}</p>
        </div>
        <div>
          <p class="font-semibold">VERSION</p>
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
        <p className="text-white min-w-10">
          {participants?.length}/{totalSlots}
        </p>
      </div>
      <div class="flex justify-between">
        <button class="hover:scale-105 duration-300 delay-100 transition-all ease-linear bg-blue-600 text-white py-2 px-4 rounded shadow-md relative z-10">
          DETAILS
        </button>
        <button class="hover:scale-105 duration-300 delay-100 transition-all ease-linear bg-green-500 text-white py-2 px-4 rounded relative z-10">
          JOIN NOW
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
