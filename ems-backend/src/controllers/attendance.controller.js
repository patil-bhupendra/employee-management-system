import Attendance from "../models/Attendance.js";

export const markAttendance = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const attendance = await Attendance.create({
      employee: req.user.id,
      date: today,
      checkIn: new Date().toLocaleTimeString(),
    });

    res.status(201).json(attendance);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Attendance already marked" });
    }
    res.status(500).json({ message: err.message });
  }
};

export const getAttendanceList = async (req, res) => {
  const records = await Attendance.find()
    .populate("employee", "name email role")
    .sort({ createdAt: -1 });
  res.json(records);
};
