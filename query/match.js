"use server";

import connectMongo from "@/lib/connectDb";
import Match from "@/model/match-model";
import User from "@/model/user-model";

export const getMatchesForCategoryId = async (id) => {
  await connectMongo();
  const matches = await Match.find({ gameFor: id }).lean();
  return matches;
};

export const getMatchById = async (id) => {
  await connectMongo();
  const match = await Match.findById(id)
    .populate({
      path: "participants",
      model: User,
      select: ["name"],
    })
    .lean();
  return match;
};
