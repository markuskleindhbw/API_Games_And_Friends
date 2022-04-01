import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    title: String,
    publisher: String,
});

export const Game = mongoose.model("Game", gameSchema);