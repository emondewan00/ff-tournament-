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
     
     
    </>
  );
}
