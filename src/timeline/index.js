import { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { fixDate } from "./util";
import { leaders, polities } from "../assets";
import "./timeline.css";

const Timeline = () => {
  const [selectedPolity, setSelectedPolity] = useState("");

  const selectPolity = (event) => setSelectedPolity(event.target.value);

  const choosePolity = () => {
    const nameCollection = [];
    for (let polity in polities) {
      nameCollection.push(polity);
    }
    nameCollection.sort((a, b) => a - b);

    const result = [];
    for (let name of nameCollection) {
      result.push(<MenuItem value={name}>{name}</MenuItem>);
    }
    return result;
  };

  const fillLeaders = (selectedPolity) => {
    const selectedLeaders = leaders
      .filter((l) => l.polity === selectedPolity)
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

    return selectedLeaders.map((l) => (
      <div>
        <a href={l.link} target="_blank" rel="noreferrer">
          {l.name} : {fixDate(l.start)} - {fixDate(l.end)}
        </a>
      </div>
    ));
  };

  return (
    <div className="timeline">
      <Select value={selectedPolity} onChange={selectPolity}>
        <MenuItem value="">None</MenuItem>
        {choosePolity()}
      </Select>
      <div className="timelineScroll">{fillLeaders(selectedPolity)}</div>
    </div>
  );
};

export default Timeline;
