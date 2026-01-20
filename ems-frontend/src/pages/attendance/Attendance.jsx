import api from "../../services/api";
import { useState } from "react";

const Attendance = () => {
  const [msg, setMsg] = useState("");

  const markAttendance = async () => {
    try {
      await api.post("/attendance");
      setMsg("Attendance marked successfully");
    } catch (err) {
      setMsg(err.response?.data?.message || "Already marked");
    }
  };

  return (
    <div>
      <h2>Mark Attendance</h2>

      <button onClick={markAttendance}>
        Check In
      </button>

      <p>{msg}</p>
    </div>
  );
};

export default Attendance;
