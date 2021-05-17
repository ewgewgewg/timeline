import { fixDate } from "../util";
import { leaderPeriods } from "../assets";

const PeriodSearch = (basicSearchTerm) => {
  let late = false;
  let early = false;
  let long = false;
  let short = false;
  let female = false;

  if (basicSearchTerm.startsWith("woman*")) {
    basicSearchTerm = basicSearchTerm.slice(6);
    female = true;
  } else if (basicSearchTerm.startsWith("female*")) {
    basicSearchTerm = basicSearchTerm.slice(7);
    female = true;
  } else if (basicSearchTerm.startsWith("f*")) {
    basicSearchTerm = basicSearchTerm.slice(2);
    female = true;
  }

  if (basicSearchTerm.startsWith("late*")) {
    basicSearchTerm = basicSearchTerm.slice(5);
    late = true;
  } else if (basicSearchTerm.startsWith("early*")) {
    basicSearchTerm = basicSearchTerm.slice(6);
    early = true;
  } else if (basicSearchTerm.startsWith("long*")) {
    basicSearchTerm = basicSearchTerm.slice(5);
    long = true;
  } else if (basicSearchTerm.startsWith("short*")) {
    basicSearchTerm = basicSearchTerm.slice(6);
    short = true;
  }

  if (basicSearchTerm.startsWith("woman*")) {
    basicSearchTerm = basicSearchTerm.slice(6);
    female = true;
  } else if (basicSearchTerm.startsWith("female*")) {
    basicSearchTerm = basicSearchTerm.slice(7);
    female = true;
  } else if (basicSearchTerm.startsWith("f*")) {
    basicSearchTerm = basicSearchTerm.slice(2);
    female = true;
  }

  let collect = [];
  for (let period of leaderPeriods) {
    if (period.name.toLowerCase().includes(basicSearchTerm.toLowerCase())) {
      if (female && (!period.gender || period.gender !== "female")) {
        continue;
      }
      collect.push(period);
    }
  }

  if (late) {
    collect.sort((a, b) => {
      if (a.start === b.start) {
        if (a.end === b.end) {
          try {
            if (a.order === b.order) {
              return a.name - b.name;
            }
            return b.order - a.order;
          } catch {
            if (a.order === b.order) {
              return a.name - b.name;
            }
            return b.end - a.end;
          }
        }
        return b.end - a.end;
      }
      return b.start - a.start;
    });
  } else if (early) {
    collect.sort((a, b) => {
      if (a.start === b.start) {
        if (a.end === b.end) {
          try {
            if (a.order === b.order) {
              return a.start - b.start;
            }
            return a.order - b.order;
          } catch {
            if (a.end === b.end) {
              return a.start - b.start;
            }
            return a.end - b.end;
          }
        }
        return a.end - b.end;
      }
      return a.start - b.start;
    });
  } else if (long) {
    collect.sort((a, b) => {
      let newEndA = a.end,
        newEndB = b.end;
      if (typeof newEndA === "string") newEndA = Number(newEndA.slice(-4));
      if (typeof newEndB === "string") newEndB = Number(newEndB.slice(-4));
      let lengthA = newEndA - a.start;
      let lengthB = newEndB - b.start;
      if (lengthA === lengthB) {
        return a.start - b.start;
      }
      return lengthB - lengthA;
    });
  } else if (short) {
    collect.sort((a, b) => {
      let newEndA = a.end,
        newEndB = b.end;
      if (typeof newEndA === "string") newEndA = Number(newEndA.slice(-4));
      if (typeof newEndB === "string") newEndB = Number(newEndB.slice(-4));
      let lengthA = newEndA - a.start;
      let lengthB = newEndB - b.start;
      if (lengthA === lengthB) {
        return a.start - b.start;
      }
      return lengthA - lengthB;
    });
  }

  const getYears = (period) => {
    if (!short && !long) return "";
    const range =
      (typeof period.end === "string"
        ? Number(period.end.slice(-4))
        : period.end) - period.start;
    return ` | Apx. Years in Power: ${range}`;
  };

  const form = collect.map((period) => {
    const flows = Object.keys(period.flows).sort().join(", ");

    return (
      <div>
        <a href={period.link} target="_blank" rel="noreferrer">
          {period.name} : {fixDate(period.start)} - {fixDate(period.end)} from{" "}
          {flows}
          {getYears(period)}
        </a>
      </div>
    );
  });
  return <div>{form}</div>;
};

export default PeriodSearch;
