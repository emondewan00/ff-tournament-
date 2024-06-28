import MatchCard from "@/components/matches/MatchCard";

const MatchesPage = () => {
  return (
    <>
      {/* match  cart  */}
      <div className="pb-10">
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
      </div>
    </>
  );
};

export default MatchesPage;
