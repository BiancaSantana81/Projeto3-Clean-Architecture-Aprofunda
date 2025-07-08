import mongoose from "mongoose";

export async function connectMongo(uri:string): Promise<void> {
    try {
        await mongoose.connect(uri);
        console.log("Connecting to MongoDB...");
    } catch(error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}