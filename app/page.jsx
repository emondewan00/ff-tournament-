import MatchTypeCard from "@/components/home/MatchTypeCard";
import connectMongo from "@/lib/connectDb";

export default async function Home() {
  await connectMongo()
  
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
