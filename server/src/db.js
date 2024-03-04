import mongoose from "mongoose";
import { config } from "dotenv";
config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB is connected!");
  } catch (error) {
    console.log("Error connecting database ", error);
  }
};
