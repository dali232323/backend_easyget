import mongoose from "mongoose";
import { environment } from "../../environment.dev";

const uri = environment.dbUri; 



export async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
        dbName: "easyget",
        autoIndex: true,
      });
    //console.log("MongoDB connected with Mongoose.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
