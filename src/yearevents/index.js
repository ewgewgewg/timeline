import { leaderPeriods } from "../assets";
import { fixDate } from "../util";

const YearEvents = (year) => {
  let collect = [];
  for (let period of leaderPeriods) {
    if (period.start <= year && period.end >= year) {
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

export default YearEvents;
