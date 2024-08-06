import { getAllOngoingMatches } from "@/query/match";

const OnGoing = async () => {
  const matches = await getAllOngoingMatches();
  console.log(matches);
  return <div>hello </div>;
};

export default OnGoing;
