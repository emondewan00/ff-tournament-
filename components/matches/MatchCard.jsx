import Link from "next/link";
import JoinAndDetailsBTN from "./JoinAndDetailsBTN";
import { auth } from "@/auth";

const MatchCard = async ({ match, href }) => {
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
    status,
  } = match;
  const matchTitle =
    title +
    " | " +
    version +
    " | " +
    _id.toString().slice(18, 24)?.toUpperCase();
  const matchSchedule = new Date(schedule).toLocaleString();

  const { user } = await auth();

  const progress = (100 / totalSlots) * participants.length;

  let matchStatus = null;

  if (status === "live") {
    matchStatus = "Join Now";
  } else if (status === "fulfilled") {
    matchStatus = "Fulfilled";
  } else {
    matchStatus = "Closed";
  }

  const isJoined = participants.find(
    (participant) => participant.userId.toString() === user.id
  );

  if (isJoined) {
    matchStatus = "Joined";
  }

  return (
    <div className="bg-white/10 rounded-lg p-4 mb-4 text-white relative match-card border-transparent border-2 backdrop-blur-sm">
      <Link href={href} className="absolute top-0 left-0 w-full h-full"></Link>
      <div className="flex items-center mb-2">
        <img
          src="https://placehold.co/50x50"
          alt="match image"
          className="w-12 h-12 rounded-full mr-2"
        />
        <div>
          <h2 className="text-lg font-semibold capitalize">{matchTitle}</h2>
          <p className="text-sm ">
            Time: <span className="text-green-500">{matchSchedule}</span>
          </p>
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
      <JoinAndDetailsBTN
        prizeDetails={prizeDetails}
        matchStatus={matchStatus}
        title={matchTitle}
        id={_id.toLocaleString()}
        isJoined={!!isJoined}
        type={type}
      />
    </div>
  );
};

export default MatchCard;
