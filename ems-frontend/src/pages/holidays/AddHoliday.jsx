import { useState } from "react";
import api from "../../services/api";

const AddHoliday = () => {
  const [form, setForm] = useState({
    title: "",
    date: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/holidays", form);
      alert("Holiday added");
    } catch {
      alert("Error adding holiday");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">
        Add Holiday
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow max-w-md"
      >
        <input
          name="title"
          placeholder="Holiday name"
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddHoliday;
