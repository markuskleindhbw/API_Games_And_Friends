import mongoose from "mongoose";

const soonGameSchema = new mongoose.Schema({
    title: String,
    publisher: String,
    fsk: Number,
    tag: String,
    description: String,
});

export const SoonGame = mongoose.model("SoonGame", soonGameSchema);