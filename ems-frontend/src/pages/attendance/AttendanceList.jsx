import { useEffect, useState } from "react";
import api from "../../services/api";
import Layout from "../../components/Layout";

const AttendanceList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/attendance").then((res) => setData(res.data));
  }, []);

  return (
    <Layout title="Attendance Records">
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Check In</th>
          </tr>
        </thead>
        <tbody>
          {data.map((a) => (
            <tr key={a._id} className="text-center">
              <td className="border p-2">{a.employee.name}</td>
              <td className="border p-2">{a.employee.email}</td>
              <td className="border p-2">{a.date}</td>
              <td className="border p-2">{a.checkIn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default AttendanceList;
