"use server";
import { signIn } from "@/auth";
import { loginUser } from "@/query/user";

const login = async (user) => {
  const result = await loginUser(user);
  if (result.success) {
    await signIn("credentials", {
      ...result.user,
      redirect: false,
    });
  }
  return result;
};
export default login;
