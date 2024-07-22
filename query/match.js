"use server";

import connectMongo from "@/lib/connectDb";
import Match from "@/model/match-model";

export const getMatchesForCategoryId = async (id) => {
  await connectMongo();
  const matches = await Match.find({gameFor:id}).lean();
  return matches;
};
