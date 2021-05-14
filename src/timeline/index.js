import { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { leaders, polities } from "../assets";
import "./timeline.css";

const Timeline = () => {
  const [selectedPolity, setSelectedPolity] = useState("");
  function choosePolity() {
    const result = [];
    for (let polity in polities) {
      result.push(<MenuItem value={polity}>{polity}</MenuItem>);
    }
    return result;
  }
  const selectPolity = (event) => setSelectedPolity(event.target.value);

  const fillLeaders = (selectedPolity) => {
    const selectedLeaders = leaders
      .filter((l) => l.polity === selectedPolity)
      .sort((a, b) => {
        return a.start - b.start;
      });

    return selectedLeaders.map((l) => (
      <div>
        <a href={l.link} target="_blank" rel="noreferrer">
          {l.name} : {l.start} - {l.end}
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
