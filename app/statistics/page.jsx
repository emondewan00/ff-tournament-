import StatisticsHead from "@/components/statistics/StatisticsHead";
import StatisticsRow from "@/components/statistics/StatisticsRow";

const Statistics = () => {
  return (
    <div>
      <table className="bg-white/10 backdrop-blur-sm w-full text-left border-collapse">
        <StatisticsHead />
        <tbody>
          <StatisticsRow />
          <StatisticsRow />
          <StatisticsRow />
          <StatisticsRow />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
