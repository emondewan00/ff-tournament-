import MatchTypeCard from "@/components/home/MatchTypeCard";
import { getMatchModesByGame } from "@/query/matchMode";

const Admin = async () => {
  const matchModes = await getMatchModesByGame("free fire");
  return (
    <div className="flex flex-col gap-y-4">
      {matchModes.map((matchMode) => (
        <MatchTypeCard
          key={matchMode._id}
          data={matchMode}
          href={`/admin/matches/${matchMode._id}`}
        />
      ))}
    </div>
  );
};

export default Admin;
