"use server";

import connectMongo from "@/lib/connectDb";
import User from "@/model/user-model";

export const registerUser = async (user) => {
  try {
    await connectMongo();
    const newUser = await User.create(user);
    return {
      success: true,
      message: "User registered successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "Registration failed",
    };
  }
};
