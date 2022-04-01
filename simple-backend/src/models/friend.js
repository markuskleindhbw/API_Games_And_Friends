import mongoose from "mongoose";

const friendSchema = new mongoose.Schema({
    nickname: String,
});

export const Friend = mongoose.model("Friend", friendSchema);