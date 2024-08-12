import MatchCard from "@/components/matches/MatchCard";
import { getAllOngoingMatches } from "@/query/match";

const OnGoing = async () => {
  const matches = await getAllOngoingMatches();

  return (
    <>
      <div className="pb-16">
        {matches.length > 0 &&
          matches.map((match) => (
            <MatchCard
              key={match._id}
              match={match}
              href={`/match/${match._id}`}
            />
          ))}
      </div>
      {matches.length === 0 && <p>No ongoing matches found.</p>}
    </>
  );
};

export default OnGoing;
