import Holiday from "../models/Holiday.js";

export const addHoliday = async (req, res) => {
  try {
    const holiday = await Holiday.create(req.body);
    res.json(holiday);
  } catch (err) {
    res.status(500).json({ message: "Failed to add holiday" });
  }
};

export const getHolidays = async (req, res) => {
  const holidays = await Holiday.find().sort({ date: 1 });
  res.json(holidays);
};
