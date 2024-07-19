import { Schema, model, models } from "mongoose";

const matchModeSchema = new Schema({
  title: {
    type: "string",
    required: true,
  },
  image: {
    type: "string",
    required: true,
  },
  game: {
    type: "string",
    required: true,
  },
  type: {
    type: "string",
    required: true,
  },
  onGoings: {
    type: "number",
    default: 0,
  },
  finishes: {
    type: "number",
    default: 0,
  },
  totals: {
    type: "number",
    default: 0,
  },
});
matchModeSchema.index({ game: "text" });
const MatchMode = models.MatchMode || model("MatchMode", matchModeSchema);

export default MatchMode;
