import express from "express";
import { addHoliday, getHolidays } from "../controllers/holidayController.js";
import auth from "../middleware/auth.js";
import role from "../middleware/role.js";

const router = express.Router();

router.post(
  "/",
  auth,
  role(["OWNER"]),
  addHoliday
);

router.get(
  "/",
  auth,
  getHolidays
);

export default router;
