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
  players: [
    {
      username: {
        type: String,
        required: true,
      },
      kills: {
        type: Number,
        default: 0,
      },
    },
  ],
  position: {
    type: Number,
  },
  winingMoney: {
    type: Number,
    default: 0,
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
