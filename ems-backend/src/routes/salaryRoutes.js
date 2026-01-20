import express from "express";
import auth from "../middleware/auth.js";
import role from "../middleware/role.js";
import { calculateSalary, mySalary } from "../controllers/salary.controller.js";
const router = express.Router();
router.post("/calculate", auth, role("OWNER"), calculateSalary);
router.get("/my", auth, role("EMPLOYEE"), mySalary);
export default router;
