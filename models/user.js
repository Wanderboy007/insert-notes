// models/User.js

import mongoose, { models } from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  batch: String,
  Year: String,
  teacher: Boolean,
});

export default mongoose.models.UserMeta ||
  mongoose.model("UserMeta", UserSchema);
