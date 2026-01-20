import { useState } from "react";
import api from "../../services/api";

const Attendance = () => {
  const [msg, setMsg] = useState("");

  const markAttendance = async () => {
    try {
      await api.post("/attendance");
      setMsg("Attendance marked successfully");
    } catch (err) {
      setMsg(err.response?.data?.message || "Attendance failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Attendance</h2>

      <button onClick={markAttendance}>Mark Attendance</button>

      {msg && <p>{msg}</p>}
    </div>
  );
};

export default Attendance;
