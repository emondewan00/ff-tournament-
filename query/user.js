"use server";

import connectMongo from "@/lib/connectDb";
import User from "@/model/user-model";
import bcrypt from "bcrypt";

export const registerUser = async (user) => {
  try {
    await connectMongo();
    const hashPassword = await bcrypt.hash(user.password, 10);

    const { _id, email, firstName, lastName, role } = await User.create({
      ...user,
      password: hashPassword,
    });
    return {
      success: true,
      message: "User registered successfully",
      user: {
        id: _id.toString(),
        email,
        firstName,
        lastName,
        role,
      },
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

export const loginUser = async (user) => {
  try {
    await connectMongo();
    const existingUser = await User.findOne({ email: user.email }).lean();
    if (!existingUser) {
      return { success: false, message: "Invalid email or password" };
    }
    const isPasswordValid = await bcrypt.compare(
      user.password,
      existingUser.password
    );
    if (!isPasswordValid) {
      return { success: false, message: "Invalid email or password" };
    }
    const { _id, email, firstName, lastName, role } = existingUser;

    return {
      success: true,
      message: "Login success",
      user: {
        id: _id.toString(),
        email,
        firstName,
        lastName,
        role,
      },
    };
  } catch (error) {
    return { success: false, message: "Failed to login" };
  }
};
