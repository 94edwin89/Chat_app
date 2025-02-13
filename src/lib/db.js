import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONOGODB_URL);
    console.log(`Mongodb conneted ${conn.connection.host}`);
  } catch (error) {
    console.log("Mongodb connection error", error);
  }
};
