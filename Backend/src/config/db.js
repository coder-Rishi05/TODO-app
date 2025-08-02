import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongoose connected successfully.");
  } catch (error) {
    console.log("failed to connect to Mongoose : ", error);
    process.exit(1); // exit with failure
  }
};
