"use server";
import { signIn } from "@/auth";
import { loginUser } from "@/query/user";

const login = async (user) => {
  const result = await loginUser(user);
  if (result.success) {
    signIn("credentials", { ...result.user, redirect: false, redirectTo: "/" });
    return result;
  }
  console.log(result);
};
export default login;
