import { useState } from "react";
import api from "../../services/api";
import Layout from "../../components/Layout";

const ApplyLeave = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async () => {
    try {
      await api.post("/leave", { fromDate, toDate, reason });
      setMsg("Leave applied successfully");
    } catch {
      setMsg("Error applying leave");
    }
  };

  return (
    <Layout title="Apply Leave">
      <div className="space-y-4 max-w-md">
        <input className="border p-2 w-full" type="date" onChange={(e) => setFromDate(e.target.value)} />
        <input className="border p-2 w-full" type="date" onChange={(e) => setToDate(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Reason" onChange={(e) => setReason(e.target.value)} />

        <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={submit}>
          Submit
        </button>

        {msg && <p className="text-green-600">{msg}</p>}
      </div>
    </Layout>
  );
};

export default ApplyLeave;
