"use server";

import connectMongo from "@/lib/connectDb";
import Participate from "@/model/participate-model";
import User from "@/model/user-model";

export const getParticipantsForMatchId = async (id) => {
  await connectMongo();
  const participants = await Participate.find({ matchId: id })
    .populate({
      path: "userId",
      model: User,
      select: ["name"],
    })
    .lean();
  return participants;
};
