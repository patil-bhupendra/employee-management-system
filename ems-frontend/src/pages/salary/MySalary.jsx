import { useEffect, useState } from "react";
import api from "../../services/api";
import Layout from "../../components/Layout";

const MySalary = () => {
  const [salary, setSalary] = useState([]);

  useEffect(() => {
    api.get("/salary/my").then((res) => setSalary(res.data));
  }, []);

  return (
    <Layout title="My Salary">
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Month</th>
            <th className="border p-2">Present Days</th>
            <th className="border p-2">Total Salary</th>
          </tr>
        </thead>
        <tbody>
          {salary.map((s) => (
            <tr key={s._id} className="text-center">
              <td className="border p-2">{s.month}</td>
              <td className="border p-2">{s.presentDays}</td>
              <td className="border p-2">₹{s.totalSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default MySalary;
