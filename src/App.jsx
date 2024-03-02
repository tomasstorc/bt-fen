import { useState } from "react";
import "./App.css";
import DataTable from "react-data-table-component";

const URL =
  "https://yw2p9h7d3e.execute-api.eu-central-1.amazonaws.com/api/employees";
const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
  },
  {
    name: "First name",
    selector: (row) => row.first_name,
  },
  {
    name: "Last name",
    selector: (row) => row.last_name,
  },
  {
    name: "email",
    selector: (row) => row.email,
  },
];

function App() {
  const [time, setTime] = useState();
  const [dbRes, setDbRes] = useState([]);
  const handleClick = () => {
    const start = new Date();
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data, "returned data");
        setDbRes(data.data);
        const end = new Date();
        const diff = end - start;
        setTime(diff);
        console.log(diff, dbRes);
      });
  };
  return (
    <>
      <button onClick={handleClick}>Get Data</button>
      <div>time {time}</div>
      <DataTable columns={columns} data={dbRes} />
    </>
  );
}

export default App;
