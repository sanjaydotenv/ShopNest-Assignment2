import mongoose from "mongoose";
import { config } from "./config.js";

const connectDB = async () => {
  try {
    const response = await mongoose.connect(`${config.MONGO_URI}`);
    console.log(`Database Connected Successfully ${response.connection.host} ${response.connection.port}`);
  } catch (error) {
    console.log(`Database Connection Failed ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
