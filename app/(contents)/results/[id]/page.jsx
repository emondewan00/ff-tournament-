import { getParticipantsForMatchId } from "@/query/participate";

const MatchResultPage = async ({ params: { id } }) => {
  const result = await getParticipantsForMatchId(id);

  if (!result?.participants) {
    return (
      <div>
        <div>Match not found.</div>
        <div>Please check the match ID and try again. </div>
      </div>
    );
  }

  const { match, participants } = result;

  const matchTitle =
    match.title +
    " | " +
    match.version +
    " | " +
    match._id.toString().slice(18, 24)?.toUpperCase();

  const matchSchedule = new Date(match?.schedule).toLocaleString();

  return (
    <div>
      <div className="bg-white/10 backdrop-blur-sm shadow-md p-4 text-center">
        <p className="capitalize font-semibold">{matchTitle}</p>
        <p className="text-sm text-green-500">Organized on {matchSchedule}</p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm shadow-md text-center mt-6">
        <table className="w-full">
          <thead className="text-center font-bold bg-blue-500 ">
            <tr className="*:py-3 *:px-4">
              <td>#</td>
              <td>Player & Kills</td>
              <td>Winning</td>
            </tr>
          </thead>
          <tbody className="*:border-b">
            {participants.map((player, index) => (
              <tr
                key={index}
                className="*:py-3 *:px-4 last:border-b-blue-500 last:border-b-2 even:bg-white/15 "
              >
                <td>{index + 1}</td>
                <td>
                  {player.players.map((player) => (
                    <div key={player._id}>
                      {player.username} &nbsp;
                      <span className="text-green-500">{player.kills}</span>
                    </div>
                  ))}
                </td>
                <td>{player.winningMoney}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchResultPage;
