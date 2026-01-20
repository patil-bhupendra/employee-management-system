import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const createOwner = async () => {
  const hashedPassword = await bcrypt.hash("123456", 10);

  const user = await User.create({
    name: "Owner",
    email: "owner@gmail.com",
    password: hashedPassword,
    role: "OWNER",
  });

  console.log("Owner created:", user.email);
  process.exit();
};

createOwner();
