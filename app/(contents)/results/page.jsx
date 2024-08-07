import MatchCard from "@/components/matches/MatchCard";
import { getResults } from "@/query/match";

const Results = async () => {
  const results = await getResults();

  return (
    <div className="pb-16">
      {results.length > 0 &&
        results.map((match) => <MatchCard key={match._id} match={match} />)}
    </div>
  );
};

export default Results;
