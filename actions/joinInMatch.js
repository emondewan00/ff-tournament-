"use server";

import { participateInAMatch } from "@/query/participate";
import { revalidatePath } from "next/cache";

export const joinInMatch = async (data) => {
  const result = await participateInAMatch(data);

  revalidatePath("/matches");
  return result;
};
