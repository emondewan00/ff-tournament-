import MatchTypeCard from "@/components/home/MatchTypeCard";
import Slider from "@/components/home/Slider";
import { getMatchModesByGame } from "@/query/matchMode";

export default async function Home() {
  const matchModes = await getMatchModesByGame("free fire");
  return (
    <div className="pb-24">
      {/* hero section  */}
      <Slider />
      {/* match type card  */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">FreeFire</h2>
        <div className="flex flex-col gap-y-4">
          {matchModes.map((matchMode) => {
            return (
              <MatchTypeCard
                key={matchMode._id}
                data={matchMode}
                href={`/matches/${matchMode._id}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
