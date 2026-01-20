import { useEffect, useState } from "react";
import api from "../../services/api";

const HolidayList = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    api.get("/holidays").then((res) => {
      setHolidays(res.data);
    });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">
        Holiday Calendar
      </h1>

      <table className="bg-white w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Date</th>
            <th className="p-2">Holiday</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((h) => (
            <tr key={h._id}>
              <td className="p-2 text-center">{h.date}</td>
              <td className="p-2">{h.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HolidayList;
