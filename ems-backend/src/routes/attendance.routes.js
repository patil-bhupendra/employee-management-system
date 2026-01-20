import express from "express";
import {
  markAttendance,
  getAttendanceList,
} from "../controllers/attendance.controller.js";
import auth from "../middleware/auth.js";
import role from "../middleware/role.js";

const router = express.Router();

router.post("/", auth, role("EMPLOYEE"), markAttendance);

router.get("/", auth, role("OWNER", "TEAM_LEAD"), getAttendanceList);

export default router;
