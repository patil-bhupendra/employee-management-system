import { useEffect, useState } from "react";
import api from "../../services/api";
const LeaveApproval = () => {
  const [leaves, setLeaves] = useState([]);
  useEffect(() => {
    api.get("/leave").then((res) => setLeaves(res.data));
  }, []);
  const updateStatus = async (id, status) => {
    await api.patch(`/leave/${id}`, { status });
    setLeaves((prev) => prev.map((l) => (l._id === id ? { ...l, status } : l)));
  };
  return (
    <div>
      <h2>Leave Requests</h2>
      {leaves.map((l) => (
        <div key={l._id}>
          <b>{l.employee.name}</b> | {l.fromDate} → {l.toDate} | {l.status}
          <button onClick={() => updateStatus(l._id, "APPROVED")}>
            Approve
          </button>
          <button onClick={() => updateStatus(l._id, "REJECTED")}>
            Reject
          </button>
        </div>
      ))}
    </div>
  );
};
export default LeaveApproval;
