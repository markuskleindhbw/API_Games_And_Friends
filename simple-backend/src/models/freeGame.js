import mongoose from "mongoose";

const freeGameSchema = new mongoose.Schema({
    title: String,
    publisher: String,
});

export const FreeGame = mongoose.model("FreeGame", freeGameSchema);