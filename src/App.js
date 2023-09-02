import { useState } from "react";
import { Select, MenuItem, TextField } from "@material-ui/core";
import "./App.css";
import PeriodSearch from "./periodsearch";
import YearEvents from "./yearevents";
import Timeline from "./timeline";

function App() {
  const [columns, setColumns] = useState(2);
  const [basicSearchTerm, setBasicSearchTerm] = useState(0);
  const selectColumns = (event) => setColumns(event.target.value);

  const basicSearch = (event) => {
    setBasicSearchTerm(event.target.value);
  };

  const makeDisplay = (basicSearchTerm) => {
    if (!basicSearchTerm) return makeColumns();
    if (isNaN(basicSearchTerm)) return PeriodSearch(basicSearchTerm);
    else return YearEvents(basicSearchTerm);
  };

  const makeColumns = () => {
    return new Array(columns).fill().map((a) => <Timeline />);
  };

  const style = {
    backgroundColor: 'white',
    margin: '0px 16px',
    padding: '0px 8px'
  }

  return (
    <div className="App">
      <div className="header">
        <div className="selectColumns">
          <div>Select Number of Columns and Flow Display, or Use Utility</div>
          <Select value={columns} onChange={selectColumns} style={style}>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
          </Select>
        </div>
        <div className="utilities">
          <div className="year">Utility: Year or Leader</div>
          <TextField onChange={basicSearch} style={style}/>
        </div>
      </div>
      <div className="body">{makeDisplay(basicSearchTerm)}</div>
    </div>
  );
}

export default App;
