import Attendance from "../models/Attendance.js";
import Salary from "../models/Salary.js";
export const calculateSalary = async (req, res) => {
  const { employeeId, month, perDaySalary } = req.body;
  const attendances = await Attendance.find({
    employee: employeeId,
    date: { $regex: `^${month}` },
  });
  const presentDays = attendances.length;
  const totalSalary = presentDays * perDaySalary;
  const salary = await Salary.create({
    employee: employeeId,
    month,
    perDaySalary,
    presentDays,
    totalSalary,
  });
  res.status(201).json(salary);
};
export const mySalary = async (req, res) => {
  const salary = await Salary.find({ employee: req.user.id }).sort({
    createdAt: -1,
  });
  res.json(salary);
};
