"use server";

import { participateInAMatch } from "@/query/participate";
import { revalidatePath } from "next/cache";

export const joinInMatch = async (formData) => {
  const gameIdName = formData.get("gameIdName");
  const matchId = "669d349fc754c653b9981c71";
  const userId = "669b77e4ded993a1210a8a56";
  const result = await participateInAMatch({ matchId, userId, gameIdName });
  console.log(result);
  revalidatePath("/matches");
  return result;
};
