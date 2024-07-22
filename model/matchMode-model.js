import { Schema, model, models } from "mongoose";

const matchModeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  game: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  onGoings: {
    type: Number,
    default: 0,
  },
  finishes: {
    type: Number,
    default: 0,
  },
  totals: {
    type: Number,
    default: 0,
  },
  cardOrder: {
    type: Number,
    required: true,
  },
});
matchModeSchema.index({ game: "text" });
const MatchMode = models.MatchMode || model("MatchMode", matchModeSchema);

export default MatchMode;
