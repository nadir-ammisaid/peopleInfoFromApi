import { useState } from "react";
import "./App.css";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const [employee, setEmployee] = useState({
    name: {
      first: "Charlie",
      last: "Thompson",
    },
    email: "charlie.thompson@example.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    },
  });

  const getEmployee = () => {
    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.results[0]);
      });
  };
  return (
    <>
      <EmployeeCard employee={employee} />
    </>
  );
}

export default App;
