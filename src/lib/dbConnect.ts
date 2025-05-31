import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};
async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("connection establish", db.connections[0].readyState);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("failed to connect to Mongo", error);
    process.exit(1);
  }
}

export default dbConnect;
