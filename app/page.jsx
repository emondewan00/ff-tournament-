import MatchTypeCard from "@/components/home/MatchTypeCard";

export default function Home() {
  return (
    <>
      {/* hero section  */}

      {/* match type card  */}
      <div class="mb-4">
        <h2 class="text-xl font-semibold mb-2">FreeFire</h2>
        <div class="grid grid-cols-2 gap-4">
          <MatchTypeCard />
          <MatchTypeCard />
          <MatchTypeCard />
          <MatchTypeCard />
        </div>
      </div>

      <div class="mb-4">
        <h2 class="text-xl font-semibold mb-2">Ludo</h2>
        <div class="grid grid-cols-2 gap-4">
          <MatchTypeCard />
          <MatchTypeCard />
        </div>
      </div>
     
      {/* <div class="max-w-md mx-auto bg-zinc-900 text-white p-4 rounded-lg">
        <img
          src="https://placehold.co/600x200"
          alt="Game Banner"
          class="w-full rounded-lg mb-4"
        />
        <h2 class="text-lg font-bold">CS (4 VS 4) | Mobile | 27848</h2>
        <div class="flex flex-wrap gap-2 my-4">
          <div class="bg-zinc-800 p-2 rounded-md flex-1 text-center">
            Type: <span class="font-bold">Solo</span>
          </div>
          <div class="bg-zinc-800 p-2 rounded-md flex-1 text-center">
            Version: <span class="font-bold">TPP</span>
          </div>
          <div class="bg-zinc-800 p-2 rounded-md flex-1 text-center">
            Map: <span class="font-bold">Bermuda</span>
          </div>
        </div>
        <div class="flex flex-wrap gap-2 my-4">
          <div class="bg-zinc-800 p-2 rounded-md flex-1 text-center">
            Match Type: <span class="font-bold">Paid</span>
          </div>
          <div class="bg-zinc-800 p-2 rounded-md flex-1 text-center">
            Entry fee: <span class="font-bold">৳50</span>
          </div>
        </div>
        <div class="bg-zinc-800 p-2 rounded-md text-center mb-4">
          Match Schedule: <span class="font-bold">05/06/2024 at 07:30 PM</span>
        </div>
        <h3 class="text-lg font-bold mb-2">Prize Details</h3>
        <div class="flex flex-wrap gap-2 mb-4">
          <div class="bg-zinc-800 p-2 rounded-md flex-1 text-center">
            Winning Prize: <span class="font-bold">৳300</span>
          </div>
          <div class="bg-zinc-800 p-2 rounded-md flex-1 text-center">
            Per Kill: <span class="font-bold">৳0</span>
          </div>
        </div>
        <div class="bg-yellow-500 text-black p-2 rounded-md text-center mb-4">
          Room details will be shared before 8-10 minutes of match start time.
        </div>
        <h3 class="text-lg font-bold mb-2">Match Instructions and Rules</h3>
        <ul class="list-disc list-inside mb-4">
          <li>Clash Squad Rules:</li>
          <li>Default Coin: 1500</li>
          <li>Character Skill: No</li>
        </ul>
        <button class="w-full bg-zinc-800 text-white py-2 rounded-md font-bold">
          JOIN NOW
        </button>
      </div> */}
    </>
  );
}
