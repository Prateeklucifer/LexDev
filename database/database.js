import mongoose from "mongoose";

export default function connectToDB() {
  // for any error checking
  let isConnected = false;

  // try to connect to mongodb
  try {
    mongoose.connect(process.env.MongoDB_URI, {
      dbName: "LexDev",
    });

    isConnected = true
    // console.log("sucess!!\nConnected to Mongodb")
  } catch (error) {
    console.error(error);
  }
}
