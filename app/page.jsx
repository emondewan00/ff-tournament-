import MatchTypeCard from "@/components/home/MatchTypeCard";
import { getMatchModesByGame } from "@/query/matchMode";

export default async function Home() {
  const matchModes = await getMatchModesByGame("free fire");
  return (
    <>
      {/* hero section  */}

      {/* match type card  */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">FreeFire</h2>
        <div className="grid grid-cols-2 gap-4 ">
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

      {/* <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Ludo</h2>
        <div className="grid grid-cols-2 gap-4">
          <MatchTypeCard />
          <MatchTypeCard />
        </div>
      </div> */}
    </>
  );
}
