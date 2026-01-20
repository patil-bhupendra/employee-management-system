import mongoose from "mongoose";
const salarySchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    month: { type: String, required: true },
    perDaySalary: { type: Number, required: true },
    presentDays: { type: Number, required: true },
    totalSalary: { type: Number, required: true },
  },
  { timestamps: true }
);
salarySchema.index({ employee: 1, month: 1 }, { unique: true });
export default mongoose.model("Salary", salarySchema);
