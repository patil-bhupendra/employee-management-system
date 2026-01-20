import express from "express";
import auth from "../middleware/auth.js";
import role from "../middleware/role.js";
import {
  applyLeave,
  myLeaves,
  allLeaves,
  updateLeaveStatus,
} from "../controllers/leave.controller.js";
const router = express.Router();
router.post("/", auth, role("EMPLOYEE"), applyLeave);
router.get("/my", auth, role("EMPLOYEE"), myLeaves);
router.get("/", auth, role("OWNER", "TEAM_LEAD"), allLeaves);
router.patch("/:id", auth, role("OWNER", "TEAM_LEAD"), updateLeaveStatus);
export default router;
