import { Schema, model, models } from "mongoose";

const matchSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  entryFee: {
    type: Number,
    required: true,
  },
  map: {
    type: String,
    enum: ["bermuda"],
    required: true,
  },
  type: {
    type: String,
    enum: ["solo", "duo", "squad"],
    required: true,
  },
  version: {
    type: String,
    enum: ["android", "pc"],
    required: true,
  },
  schedule: {
    type: Date,
    required: true,
  },
  participants: [Schema.ObjectId],
  matchConfig: Schema.Types.Mixed,
  prizeDetails: Schema.Types.Mixed,
});

const Match = models.Match || model("Match", matchSchema);

export default Match;
