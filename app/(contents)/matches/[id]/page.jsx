import MatchCard from "@/components/matches/MatchCard";
import { getMatchesForCategoryId } from "@/query/match";

const MatchesPage = async ({ params: { id } }) => {
  const matches = await getMatchesForCategoryId(id);

  return (
    <div className="pb-16">
      {matches.map((match) => (
        <MatchCard key={match._id} match={match} />
      ))}
    </div>
  );
};

export default MatchesPage;
