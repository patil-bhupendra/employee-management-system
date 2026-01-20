import { useEffect, useState } from "react";
import api from "../../services/api";
const MyLeaves = () => {
  const [leaves, setLeaves] = useState([]);
  useEffect(() => {
    api.get("/leave/my").then((res) => setLeaves(res.data));
  }, []);
  return (
    <div>
      <h2>My Leaves</h2>
      <ul>
        {leaves.map((l) => (
          <li key={l._id}>
            {l.fromDate} → {l.toDate} | {l.status}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MyLeaves;
