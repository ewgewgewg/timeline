import { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import "./App.css";
import Timeline from "./timeline";

function App() {
  const [columns, setColumns] = useState(2);
  const selectColumns = (event) => setColumns(event.target.value);

  const makeColumns = () => {
    return new Array(columns).fill().map((a) => <Timeline />);
  };

  return (
    <div className="App">
      <div className="selectColumns">
        <div>Select Number of Columns</div>
        <Select value={columns} onChange={selectColumns}>
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
          <MenuItem value={5}>Five</MenuItem>
        </Select>
      </div>
      <div className="body">{makeColumns()}</div>
    </div>
  );
}

export default App;
