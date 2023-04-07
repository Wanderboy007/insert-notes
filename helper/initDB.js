import mongoose from "mongoose";

export default function initDB() {
  if (mongoose.connections[0].readyState) {
    console.log("alredy connected");
  }
  mongoose.connect(process.env.MONGODB_URI),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  mongoose.connection.on("connected", () => {
    console.log("connection sucessfully established");
  });
  mongoose.connection.on("error", () => {
    console.log("connection error");
  });
}
