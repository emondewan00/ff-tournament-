"use server";

import { registerUser } from "@/query/user";
import { signIn } from "@/auth";

const signUp = async (data) => {
  const result = await registerUser(data);
  if (result?.success) {
    await signIn("credentials", { ...result.user, redirect: false });
  }
  return result;
};

export default signUp;
