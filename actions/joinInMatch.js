"use server";

import { participateInAMatch } from "@/query/participate";
import { revalidatePath } from "next/cache";

export const joinInMatch = async (formData) => {
  const data = Object.fromEntries(formData);
  const result = await participateInAMatch(data);

  revalidatePath("/matches");
  return result;
};
