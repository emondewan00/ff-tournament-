"use server";

import { registerUser } from "@/query/user";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

const signUp = async (data) => {
  const result = await registerUser(data);
  if (result.success) {
    signIn("credentials", { ...result });
    redirect("/");
  }
  return result;
};

export default signUp;
