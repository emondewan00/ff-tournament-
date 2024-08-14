import { Schema, model, models } from "mongoose";

const participateSchema = new Schema({
  userId: {
    type: Schema.ObjectId,
    required: true,
    index: true,
  },
  matchId: {
    type: Schema.ObjectId,
    required: true,
    index: true,
  },
  username: {
    type: String,
    required: true,
  },
  totalKills: {
    type: Number,
  },
  position: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["pending", "published"],
    default: "pending",
  },
});

const Participate =
  models.Participate || model("Participate", participateSchema);
export default Participate;
