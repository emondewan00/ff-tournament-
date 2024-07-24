"use server";
import mongoose from "mongoose";
import connectMongo from "@/lib/connectDb";
import Participate from "@/model/participate-model";
import User from "@/model/user-model";
import Match from "@/model/match-model";

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

export const participateInAMatch = async (data) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    await connectMongo();
    const result = await Participate.create(data);
    const updatedMatch = await Match.findById(data.matchId);

    updatedMatch.participants.push(result._id);
    await updatedMatch.save({ session });

    const updatedUser = await User.findById(data.userId);

    if (updatedUser.taka < updatedMatch.taka) {
      await session.abortTransaction();
      session.endSession();
      return { message: "Couldn't have enough money", status: "error" };
    }
    updatedUser.taka = updatedUser.taka - updatedMatch.entryFee;
    await updatedUser.save({ session });

    return { message: "Participate successfully", status: "success" };
  } catch (error) {
    return {
      message: error.message || "Participate failed",
      status: "error",
    };
  }
};
