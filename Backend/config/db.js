import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rishabhrawat1800:JqTctOxqUWQRBuJl@cluster0.weiqwnm.mongodb.net/notes_db?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Mongoose connected successfully.");
  } catch (error) {
    console.log("failed to connect to Mongoose : ", error);
    process.exit(1); // exit with failure
  }
};
