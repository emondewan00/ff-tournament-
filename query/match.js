"use server";

import connectMongo from "@/lib/connectDb";
import Match from "@/model/match-model";
import User from "@/model/user-model";

export const getMatchesForCategoryId = async (id) => {
  await connectMongo();
  const matches = await Match.find({ gameFor: id }).lean();
  return matches;
};

export const getAllOngoingMatches = async () => {
  await connectMongo();
  const matches = await Match.find({ status: "live" }).lean();
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

// this function will return which matches are closed in 24 hours  from now
export const getResults = async () => {
  await connectMongo();
  const matches = await Match.find({
    closed: { $gte: new Date(new Date() - 24 * 60 * 60 * 1000) },
  }).lean();
  return matches;
};
