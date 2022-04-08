import mongoose from "mongoose";

const soonGameSchema = new mongoose.Schema({
    title: String,
    publisher: String,
});

export const SoonGame = mongoose.model("SoonGame", soonGameSchema);