import { useState } from "react";
import api from "../../services/api";
const CalculateSalary = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [month, setMonth] = useState("");
  const [perDaySalary, setPerDaySalary] = useState("");
  const [msg, setMsg] = useState("");
  const calculate = async () => {
    try {
      await api.post("/salary/calculate", { employeeId, month, perDaySalary });
      setMsg("Salary calculated successfully");
    } catch {
      setMsg("Error calculating salary");
    }
  };
  return (
    <div>
      <h2>Calculate Salary</h2>
      <input
        placeholder="Employee ID"
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <input
        placeholder="Month (YYYY-MM)"
        onChange={(e) => setMonth(e.target.value)}
      />
      <input
        placeholder="Per Day Salary"
        onChange={(e) => setPerDaySalary(e.target.value)}
      />
      <button onClick={calculate}>Calculate</button> <p>{msg}</p>
    </div>
  );
};
export default CalculateSalary;
