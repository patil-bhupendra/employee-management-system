import Leave from "../models/Leave.js";

export const applyLeave = async (req, res) => {
  const { fromDate, toDate, reason } = req.body;
  const leave = await Leave.create({
    employee: req.user.id,
    fromDate,
    toDate,
    reason,
  });
  res.status(201).json(leave);
};
export const myLeaves = async (req, res) => {
  const leaves = await Leave.find({ employee: req.user.id }).sort({
    createdAt: -1,
  });
  res.json(leaves);
};
export const allLeaves = async (req, res) => {
  const leaves = await Leave.find()
    .populate("employee", "name email")
    .sort({ createdAt: -1 });
  res.json(leaves);
};
export const updateLeaveStatus = async (req, res) => {
  const { status } = req.body;
  const leave = await Leave.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );
  res.json(leave);
};
