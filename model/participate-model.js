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
  gameIdName: {
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
  },
});

const Participate =
  models.Participate || model("Participate", participateSchema);
export default Participate;
