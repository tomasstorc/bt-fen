import { useState } from "react";
import "./App.css";
import DataTable from "react-data-table-component";
import { URL, columns } from "./consts";

function App() {
  const [time, setTime] = useState();
  const [dbRes, setDbRes] = useState([]);
  const [dbTime, setDbTime] = useState(0);
  const handleClick = () => {
    const start = performance.now();
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setDbRes(data.data);
        setDbTime(data.time);
        const end = performance.now();
        const diff = end - start;
        setTime(diff);
      });
  };
  return (
    <>
      <button onClick={handleClick}>Získat data</button>
      <DataTable columns={columns} data={dbRes} />
      <div style={{ color: "black" }}>
        čas dotazu z aplikační vrstvy na databázovou vrstu: {dbTime}
      </div>
      <div style={{ color: "black" }}>Celkový čas dotazu: {time}</div>
    </>
  );
}

export default App;
