import mongoose, { models } from "mongoose";

const usercomments = new mongoose.Schema({
  name: String,
  comment: String,
  extra: String,
  teacher: Boolean,
});

export default mongoose.models.newComs ||
  mongoose.model("newComs", usercomments);
