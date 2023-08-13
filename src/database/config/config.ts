import mongoose, { ConnectOptions } from "mongoose";

interface Config extends ConnectOptions {
  MONGO_URI: string;
  options: {
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
  };
}

mongoose.set("strictQuery", true);
const config: Config = {
  MONGO_URI: process.env.MONGO_URL || "",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

export default config;
