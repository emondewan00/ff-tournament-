"use server";
import connectMongo from "@/lib/connectDb";
import Participate from "@/model/participate-model";
import User from "@/model/user-model";
import Match from "@/model/match-model";

export const getParticipantsForMatchId = async (id) => {
  await connectMongo();

  const match = await Match.findById(id)
    .select({
      title: 1,
      version: 1,
      schedule: 1,
    })
    .lean();

  const participants = await Participate.find({ matchId: id })
    .populate({
      path: "userId",
      model: User,
      select: ["name"],
    })
    .lean();
  return {
    match,
    participants,
  };
};

export const participateInAMatch = async (data) => {
  try {
    await connectMongo();
    // get match by matchId
    const updatedMatch = await Match.findById(data.matchId);

    // create new participant instance
    const newParticipant = new Participate(data);

    // if slots are not available then return
    if (updatedMatch.totalSlots <= updatedMatch.participants.length) {
      throw new Error("Matched participants already fulfilled");
    }

    // get user for update taka
    const updatedUser = await User.findById(data.userId);

    // if user have not enough taka then return
    if (updatedUser.taka < updatedMatch.entryFee) {
      throw new Error("Couldn't have enough money");
    }

    // save new participants
    await newParticipant.save();

    // update participants array with new participants in match
    updatedMatch.participants.push(newParticipant._id);

    if (updatedMatch.participants.length === updatedMatch.totalSlots) {
      updatedMatch.status = "fulfilled";
    }
    await updatedMatch.save();

    // update user taka after subtraction of entry fee
    updatedUser.taka = updatedUser.taka - updatedMatch.entryFee;
    await updatedUser.save();

    return {
      success: true,
      message: "Participate successfully",
      status: "success",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error.message || "Participate failed",
      status: "error",
    };
  }
};
