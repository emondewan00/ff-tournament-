"use server";

const { registerUser } = require("@/query/user");

const signUp = async (data) => {
  const result = await registerUser(data);
  return result;
};

export default signUp;
