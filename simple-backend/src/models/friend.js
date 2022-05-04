import mongoose from "mongoose";

const friendSchema = new mongoose.Schema({
    nickname: String,
    onlineStatus: String,
    description: String, 
    age: Number,
    gender: String,
});

export const Friend = mongoose.model("Friend", friendSchema);