import JoinBTN from "@/components/match/JoinBTN";
import { getMatchById } from "@/query/match";

const MatchDetailsPage = async ({ params: { id } }) => {
  const match = await getMatchById(id);
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
    matchConfig,
  } = match;
  const matchTitle =
    title +
    " | " +
    version +
    " | " +
    _id.toString().slice(18, 24)?.toUpperCase();
  const matchSchedule = new Date(schedule).toLocaleString();

  let contents = [];

  for (let key in matchConfig) {
    contents.push(
      <li key={key}>
        {key}: {matchConfig[key]}
      </li>
    );
  }

  return (
    <div className=" mx-auto  text-white  rounded-lg pb-24">
      <img
        src="https://placehold.co/400x200"
        alt="Game Banner"
        className="w-full rounded-lg mb-4"
      />
      <h2 className="text-lg font-bold capitalize">{matchTitle}</h2>
      <div className="flex flex-wrap gap-2 my-4">
        <div className="bg-zinc-800 p-2 rounded-md flex-1 text-center">
          Type: <span className="font-bold capitalize">{type}</span>
        </div>
        <div className="bg-zinc-800 p-2 rounded-md flex-1 text-center">
          Version: <span className="font-bold capitalize">{version}</span>
        </div>
        <div className="bg-zinc-800 p-2 rounded-md flex-1 text-center">
          Map: <span className="font-bold capitalize">{map}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 my-4">
        <div className="bg-zinc-800 p-2 rounded-md flex-1 text-center">
          Match Type:{" "}
          <span className="font-bold">{entryFee ? "Paid" : "Free"}</span>
        </div>
        <div className="bg-zinc-800 p-2 rounded-md flex-1 text-center">
          Entry fee: <span className="font-bold">৳{entryFee}</span>
        </div>
      </div>
      <div className="bg-zinc-800 p-2 rounded-md text-center mb-4">
        Match Schedule: <span className="font-bold">{matchSchedule}</span>
      </div>
      <h3 className="text-lg font-bold mb-2">Prize Details</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="bg-zinc-800 p-2 rounded-md flex-1 text-center">
          Winning Prize:{" "}
          <span className="font-bold">৳{prizeDetails?.totalPrize}</span>
        </div>
        <div className="bg-zinc-800 p-2 rounded-md flex-1 text-center">
          Per Kill: <span className="font-bold">৳{prizeDetails?.perKill}</span>
        </div>
      </div>
      <div className="bg-yellow-500 text- p-2 rounded-md text-center mb-4">
        Room details will be shared before 8-10 minutes of match start time.
      </div>
      <h3 className="text-lg font-bold mb-2">Match Config</h3>
      <ul className="list-disc list-inside mb-4 capitalize">
        {contents.map((content) => content)}
      </ul>
      <JoinBTN
        isClosed={totalSlots === participants?.length}
        isJoined={participants.includes(participants)}
      />
    </div>
  );
};

export default MatchDetailsPage;
