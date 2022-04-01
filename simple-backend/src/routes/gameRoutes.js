import express from "express";
import {
    getGames,
    getGameById,
    getGameByTitle,
    getGameByPublisher,
    addGame,
    newGameValidators,
} from "../controllers/gameControllers.js";

const router = express.Router();

router.get("/", getGames);
router.get("/search", getGameByTitle);
router.get("/publisher", getGameByPublisher);
router.get("/:id", getGameById);
router.post("/add", newGameValidators, addGame);

export default router;