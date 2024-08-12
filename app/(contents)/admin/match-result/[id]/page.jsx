import { getParticipantsForMatchId } from "@/query/participate";

const ResultPage = async ({ params: { id } }) => {
  const participants = await getParticipantsForMatchId(id);

  return (
    <div>
      <table className="table ">
        <thead>
          <tr>
            <th>Name </th>
            <th>Position</th>
            <th>Kills</th>
            <th>.</th>
          </tr>
        </thead>
        <tbody>
          {participants?.participants?.map((participant) => (
            <tr key={participant?._id}>
              <td>{participant?.userId.name}</td>
              <td className="text-center">{participant?.position}</td>
              <td className="text-center">{participant?.totalKills}</td>
              <td>{participant?.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultPage;
