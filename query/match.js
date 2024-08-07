"use server";

import connectMongo from "@/lib/connectDb";
import Match from "@/model/match-model";
import Participate from "@/model/participate-model";

export const getMatchesForCategoryId = async (id) => {
  await connectMongo();
  const matches = await Match.find({ gameFor: id })
    .populate({
      path: "participants",
      model: Participate,
      select: ["userId"],
    })
    .sort({ schedule: 1 })
    .lean();
  return matches;
};

export const getAllOngoingMatches = async () => {
  await connectMongo();
  const matches = await Match.find({
    status: { $in: ["live", "fulfilled"] },
  })
    .populate({
      path: "participants",
      model: Participate,
      select: ["userId"],
    })
    .sort({ schedule: 1 })
    .lean();
  return matches;
};

export const getMatchById = async (id) => {
  await connectMongo();
  const match = await Match.findById(id)
    .populate({
      path: "participants",
      model: Participate,
      select: ["name"],
    })
    .lean();
  return match;
};

// this function will return which matches are closed in 24 hours  from now
export const getResults = async () => {
  await connectMongo();
  const matches = await Match.find({
    closedTime: { $gte: new Date(new Date() - 24 * 60 * 60 * 1000) },
  })
    .sort({ closedTime: -1 })
    .lean();
  return matches;
};
