import mongoose from "mongoose";

const freeGameSchema = new mongoose.Schema({
    title: String,
    publisher: String,
    fsk: Number,
    tag: String,
    description: String,
});

export const FreeGame = mongoose.model("FreeGame", freeGameSchema);