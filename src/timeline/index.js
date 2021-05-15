import { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { fixDate } from "../util";
import { leaderPeriods, flows } from "../assets";
import "./timeline.css";

const Timeline = () => {
  const [selectedFlow, setSelectedFlow] = useState("");

  const selectFlow = (event) => setSelectedFlow(event.target.value);

  const flowChoices = () => {
    const nameCollection = [];
    for (let flow in flows) {
      nameCollection.push(flow);
    }
    nameCollection.sort();

    const result = [];
    for (let name of nameCollection) {
      result.push(<MenuItem value={name}>{name}</MenuItem>);
    }
    return result;
  };

  const fillLeaders = (selectedFlow) => {
    const selectedPeriods = leaderPeriods
      .filter((sp) => sp.flows[selectedFlow])
      .sort((a, b) => {
        if (a.start === b.start) {
          if (a.end === b.end) {
            try {
              return a.order - b.order;
            } catch {
              return a.end - b.end;
            }
          }
          return a.end - b.end;
        }
        return a.start - b.start;
      });

    const processPeriods = [];
    for (let i = 0; i < selectedPeriods.length; i++) {
      if (i !== 0) {
        let onlyInPrev = [];
        let onlyInCurr = [];
        const lastPeriod = processPeriods[processPeriods.length - 1].flows;
        const currPeriod = selectedPeriods[i].flows;
        for (let lastFlow in lastPeriod) {
          if (!currPeriod[lastFlow]) {
            onlyInPrev.push(lastFlow);
          }
        }
        for (let currFlow in currPeriod) {
          if (!lastPeriod[currFlow]) {
            onlyInCurr.push(currFlow);
          }
        }
        onlyInPrev.sort();
        onlyInCurr.sort();
        for (let label of onlyInPrev) {
          processPeriods.push("End " + label);
        }
        for (let label of onlyInCurr) {
          processPeriods.push("Start " + label);
        }
      }
      processPeriods.push(selectedPeriods[i]);
    }

    return processPeriods.map((l) => {
      if (typeof l === "string") {
        return <div>{l}</div>;
      }
      return (
        <div>
          <a href={l.link} target="_blank" rel="noreferrer">
            {l.name} : {fixDate(l.start)} - {fixDate(l.end)}
          </a>
        </div>
      );
    });
  };

  return (
    <div className="timeline">
      <Select value={selectedFlow} onChange={selectFlow}>
        <MenuItem value="">None</MenuItem>
        {flowChoices()}
      </Select>
      <div className="timelineScroll">{fillLeaders(selectedFlow)}</div>
    </div>
  );
};

export default Timeline;
