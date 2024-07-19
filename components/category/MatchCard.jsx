import Link from "next/link";

const MatchCard = () => {
  return (
    <Link href={"/game/1"}>
      <div class="bg-white/5 rounded-lg p-4 mb-4 text-white">
        <div class="flex items-center mb-2">
          <img
            src="https://placehold.co/50x50"
            alt="match image"
            class="w-12 h-12 rounded-full mr-2"
          />
          <div>
            <h2 class="text-lg font-semibold">CS (3 VS 3) | Mobile | 27840</h2>
            <p class="text-sm text-red-500">Time: 05/06/2024 at 11:30 AM</p>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2 text-sm mb-2">
          <div>
            <p class="font-semibold">TOTAL PRIZE</p>
            <p>৳300</p>
          </div>
          <div>
            <p class="font-semibold">PER KILL</p>
            <p>৳0</p>
          </div>
          <div>
            <p class="font-semibold">ENTRY FEE</p>
            <p>৳50</p>
          </div>
          <div>
            <p class="font-semibold">MAP</p>
            <p>Bermuda</p>
          </div>
          <div>
            <p class="font-semibold">TYPE</p>
            <p>Solo</p>
          </div>
          <div>
            <p class="font-semibold">VERSION</p>
            <p>TPP</p>
          </div>
        </div>
        <div class="flex justify-between">
          <button class="bg-purple-600 text-white py-2 px-4 rounded shadow-md">
            DETAILS
          </button>
          <button class="bg-green-500 text-white py-2 px-4 rounded">
            JOIN NOW
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MatchCard;
