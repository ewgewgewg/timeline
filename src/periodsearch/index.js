import { fixDate } from "../util";
import { leaderPeriods } from "../assets";

const PeriodSearch = (basicSearchTerm) => {
  let collect = [];
  for (let period of leaderPeriods) {
    if (period.name.toLowerCase().includes(basicSearchTerm.toLowerCase())) {
      collect.push(period);
    }
  }

  const form = collect.map((period) => {
    const flows = Object.keys(period.flows).sort().join(", ");
    return (
      <div>
        <a href={period.link} target="_blank" rel="noreferrer">
          {period.name} : {fixDate(period.start)} - {fixDate(period.end)} from{" "}
          {flows}
        </a>
      </div>
    );
  });
  return <div>{form}</div>;
};

export default PeriodSearch;
