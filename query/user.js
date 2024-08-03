"use server";

import connectMongo from "@/lib/connectDb";
import User from "@/model/user-model";
import bcrypt from "bcrypt";

export const registerUser = async (user) => {
  try {
    await connectMongo();
    const password = await bcrypt.hash(user.password, 10);

    await User.create({ ...user, password });
    return {
      success: true,
      message: "User registered successfully",
    };
  } catch (error) {
    let message = error.message || "User registration failed";
    if (error.code === 11000) {
      message = "Email already exists";
    }
    return {
      success: false,
      message,
    };
  }
};
