"use server";

import connectMongo from "@/lib/connectDb";
import MatchMode from "@/model/matchMode-model";

export const getMatchModesByGame = async (game) => {
  await connectMongo();
  const matchModes = await MatchMode.find({ $text: { $search: game } }).lean();
//   console.log(matchModes,"matchModes")
  return matchModes;
};
