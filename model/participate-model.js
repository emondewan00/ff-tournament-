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
  totalKills: {
    type: Number,
  },
  position: {
    type: Number,
  },
});

const Participate =
  models.Participate || model("Participate", participateSchema);
export default Participate;
