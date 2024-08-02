import mongoose, { Schema, model, models, mongo } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  taka: {
    type: Number,
    default: 0,
  },
});

userSchema.index({ email: 1 }, { unique: true });

mongoose.set("autoIndex", true);

const User = models.User || model("User", userSchema);

export default User;
