import { Schema, model, models } from "mongoose";

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
    unique: [true, "Email is already used"],
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
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const User = models.User || model("User", userSchema);

export default User;
