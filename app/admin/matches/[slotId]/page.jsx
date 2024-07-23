
import MatchCard from "@/components/admin/matches/MatchCard";
import { getMatchesForCategoryId } from "@/query/match";

const MatchesPage = async ({ params: { slotId } }) => {
  const matches = await getMatchesForCategoryId(slotId);

  return (
    <div className="pb-16">
      {matches.map((match) => (
        <MatchCard key={match._id} match={match} />
      ))}
    </div>
  );
};

export default MatchesPage;
