import { useState } from "react";
import "./App.css";
import DataTable from "react-data-table-component";
import { URL, columns } from "./consts";}


function App() {
  const [time, setTime] = useState();
  const [dbRes, setDbRes] = useState([]);
  const handleClick = () => {
    const start = new Date().getTime();
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setDbRes(data.data);
        const end = new Date().getTime();
        const diff = end - start;
        setTime(diff);
      });
  };
  return (
    <>
      <button onClick={handleClick}>Získat data</button>
      <DataTable columns={columns} data={dbRes} />
      <div style={{ color: "black" }}>celkový čas: {time}</div>
    </>
  );
}

export default App;
