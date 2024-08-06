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

      <div className="bg-indigo-500 text- p-2 text-center mb-4">
        Room details will be shared before 8-10 minutes of match start time.
      </div>

      <div className="p-4 bg-white/10 backdrop-blur-sm">
        <h2 className="text-lg font-bold capitalize">{matchTitle}</h2>
        <div className="flex flex-wrap gap-2 my-2">
          <div className=" py-2 px-1 bg-white/10 border rounded-md flex-1 text-center">
            Type: <span className="font-semibold capitalize">{type}</span>
          </div>
          <div className=" py-2 px-1 bg-white/10 border rounded-md flex-1 text-center">
            Version: <span className="font-semibold capitalize">{version}</span>
          </div>
          <div className=" py-2 px-1 bg-white/10 border rounded-md flex-1 text-center">
            Map: <span className="font-semibold capitalize">{map}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 my-2">
          <div className="bg-white/10 border py-2 px-1 rounded-md flex-1 text-center">
            Match Type:{" "}
            <span className="font-semibold">{entryFee ? "Paid" : "Free"}</span>
          </div>
          <div className="bg-white/10 border py-2 px-1 rounded-md flex-1 text-center">
            Entry fee: <span className="font-semibold">৳{entryFee}</span>
          </div>
        </div>
        <div className="bg-white/10 border py-2 px-1 rounded-md text-center ">
          Match Schedule:{" "}
          <span className="font-semibold text-green-500">{matchSchedule}</span>
        </div>

        <div className="flex flex-wrap gap-2 my-2">
          <div className="bg-white/10 border p-2 rounded-md flex-1 text-center">
            Winning Prize:{" "}
            <span className="font-bold">৳{prizeDetails?.totalPrize}</span>
          </div>
          <div className="bg-white/10 border p-2 rounded-md flex-1 text-center">
            Per Kill:{" "}
            <span className="font-bold">৳{prizeDetails?.perKill}</span>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white/10 backdrop-blur-sm my-4">
        <h3 className="text-lg font-bold ">Match Config</h3>
        <ul className="list-disc list-inside capitalize">
          {contents.map((content) => content)}
        </ul>
      </div>
      <JoinBTN
        isClosed={totalSlots === participants?.length}
        isJoined={participants.includes(participants)}
        id={id}
      />
    </div>
  );
};

export default MatchDetailsPage;
