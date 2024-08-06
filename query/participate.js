"use server";
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
  try {
    await connectMongo();
    // get match by matchId
    const updatedMatch = await Match.findById(data.matchId);

    // create new participant instance
    const newParticipant = new Participate(data);

    // if slots are not available then return
    if (updatedMatch.totalSlots <= updatedMatch.participants.length) {
      return {
        success: true,
        message: "Matched participants already fulfilled",
        status: "failed",
      };
    }

    // get user for update taka
    const updatedUser = await User.findById(data.userId);

    // if user have not enough taka then return
    if (updatedUser.taka < updatedMatch.entryFee) {
      return {
        success: true,
        message: "Couldn't have enough money",
        status: "error",
      };
    }

    // save new participants
    await newParticipant.save();

    // update participants array with new participants in match
    updatedMatch.participants.push(newParticipant._id);
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
    return {
      success: false,
      message: error.message || "Participate failed",
      status: "error",
    };
  }
};
