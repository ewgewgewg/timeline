import { useState } from "react";
import { Select, MenuItem, TextField } from "@material-ui/core";
import "./App.css";
import YearEvents from "./yearevents";
import Timeline from "./timeline";

function App() {
  const [columns, setColumns] = useState(2);
  const [year, setYear] = useState(0);
  const selectColumns = (event) => setColumns(event.target.value);

  const yearSearch = (event) => {
    setYear(event.target.value);
  };

  const makeColumns = () => {
    return new Array(columns).fill().map((a) => <Timeline />);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="selectColumns">
          <div>Select Number of Columns and Flow Display, or Use Utility</div>
          <Select value={columns} onChange={selectColumns}>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
          </Select>
        </div>
        <div className="utilities">
          <div className="year">Utility: Year</div>
          <TextField onChange={yearSearch} />
        </div>
      </div>
      <div className="body">{year ? YearEvents(year) : makeColumns()}</div>
    </div>
  );
}

export default App;
