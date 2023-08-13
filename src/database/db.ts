import mongoose, { ConnectOptions } from "mongoose";
import Config from "./config/config";

const connectDB = async () => {
  try {
    await mongoose.connect(Config.MONGO_URI, Config.options as ConnectOptions);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
    mongoose.connection.close();
  }
};
connectDB();
