const MatchCard = () => {
  return (
    <div class="bg-white rounded-lg p-4 mb-4 text-black">
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
      <div class="grid grid-cols-2 gap-2 text-sm mb-2">
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
        <button class="bg-green-500 text-white py-2 px-4 rounded">
          WATCH MATCH
        </button>
        <button class="bg-blue-500 text-white py-2 px-4 rounded">
          NOT JOINED
        </button>
      </div>
      <button class="mt-2 flex items-center text-blue-500">
        <img src="https://placehold.co/20x20" alt="details icon" class="mr-1" />
        Total Prize Details
      </button>
    </div>
  );
};

export default MatchCard;
