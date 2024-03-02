import { useState } from "react";
import "./App.css";
import DataTable from "react-data-table-component";

const URL = "";
const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

function App() {
  const [time, setTime] = useState();
  const [dbRes, setDbRes] = useState([]);
  const handleClick = () => {
    fetch(URL);
    const start = new Date()
      .then((res) => res.json())
      .then((data) => {
        setDbRes(data);
        const end = new Date();
        const diff = end - start;
        const SEC = 1000,
          MIN = 60 * SEC,
          HRS = 60 * MIN;
        const humanDiff = `${Math.floor(diff / HRS)}:${Math.floor(
          (diff % HRS) / MIN
        ).toLocaleString("en-US", { minimumIntegerDigits: 2 })}:${Math.floor(
          (diff % MIN) / SEC
        ).toLocaleString("en-US", { minimumIntegerDigits: 2 })}.${Math.floor(
          diff % SEC
        ).toLocaleString("en-US", {
          minimumIntegerDigits: 4,
          useGrouping: false,
        })}`;
        setTime(humanDiff);
      });
  };
  return (
    <>
      <button onClick={handleClick}>Get Data</button>
      time {time}
      <DataTable columns={columns} data={dbRes} />
    </>
  );
}

export default App;
