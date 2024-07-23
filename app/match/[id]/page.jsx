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
    <div class=" mx-auto  text-white  rounded-lg">
      <img
        src="https://placehold.co/600x200"
        alt="Game Banner"
        class="w-full rounded-lg mb-4"
      />
      <h2 class="text-lg font-bold capitalize">{matchTitle}</h2>
      <div class="flex flex-wrap gap-2 my-4">
        <div class="bg-zinc-800 p-2 rounded-md flex-1 text-center">
          Type: <span class="font-bold capitalize">{type}</span>
        </div>
        <div class="bg-zinc-800 p-2 rounded-md flex-1 text-center">
          Version: <span class="font-bold capitalize">{version}</span>
        </div>
        <div class="bg-zinc-800 p-2 rounded-md flex-1 text-center">
          Map: <span class="font-bold capitalize">{map}</span>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 my-4">
        <div class="bg-zinc-800 p-2 rounded-md flex-1 text-center">
          Match Type:{" "}
          <span class="font-bold">{entryFee ? "Paid" : "Free"}</span>
        </div>
        <div class="bg-zinc-800 p-2 rounded-md flex-1 text-center">
          Entry fee: <span class="font-bold">৳{entryFee}</span>
        </div>
      </div>
      <div class="bg-zinc-800 p-2 rounded-md text-center mb-4">
        Match Schedule: <span class="font-bold">{matchSchedule}</span>
      </div>
      <h3 class="text-lg font-bold mb-2">Prize Details</h3>
      <div class="flex flex-wrap gap-2 mb-4">
        <div class="bg-zinc-800 p-2 rounded-md flex-1 text-center">
          Winning Prize:{" "}
          <span class="font-bold">৳{prizeDetails?.totalPrize}</span>
        </div>
        <div class="bg-zinc-800 p-2 rounded-md flex-1 text-center">
          Per Kill: <span class="font-bold">৳{prizeDetails?.perKill}</span>
        </div>
      </div>
      <div class="bg-yellow-500 text- p-2 rounded-md text-center mb-4">
        Room details will be shared before 8-10 minutes of match start time.
      </div>
      <h3 class="text-lg font-bold mb-2">Match Config</h3>
      <ul class="list-disc list-inside mb-4 capitalize">
        {contents.map((content) => content)}
      </ul>
      <button class="w-full bg-zinc-800 text-white py-2 rounded-md font-bold">
        JOIN NOW
      </button>
    </div>
  );
};

export default MatchDetailsPage;
