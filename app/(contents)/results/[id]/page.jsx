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

      <div className="bg-white/10 backdrop-blur-sm shadow-md p-4 text-center mt-6">
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>Player & Kills</td>
              <td>Winning</td>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant, index) => (
              <tr key={participant._id}>
                <td>{index + 1}</td>
                <td>
                  {participant.player.username} &nbsp;
                  <span className="text-green-500">
                    {participant.kills} kills
                  </span>
                </td>
                <td>{participant.winning ? "Winning" : "Losing"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchResultPage;
