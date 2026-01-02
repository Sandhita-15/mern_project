import mongoose from "mongoose";

const dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "RESTAURANT",
    });
    console.log("Connected to database successfully!");
  } catch (error) {
    console.log("Database connection error:", error);
  }
};

export default dbconnection;
