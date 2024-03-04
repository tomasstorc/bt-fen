export const URL =
  "https://dpq4gozyfh.execute-api.eu-central-1.amazonaws.com/api/employees";
export const columns = [
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
