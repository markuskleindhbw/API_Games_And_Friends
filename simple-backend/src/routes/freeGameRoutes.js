import express from "express";
import {
    getFreeGames,
    getFreeGameById,
    getFreeGameByTitle,
    getFreeGameByPublisher,
    addFreeGame,
    editFreeGame,
    deleteFreeGame,
    newFreeGameValidators,
} from "../controllers/freeGameControllers.js";

const router = express.Router();

router.get("/", getFreeGames);
router.get("/search", getFreeGameByTitle);
router.get("/publisher", getFreeGameByPublisher);
router.get("/:id", getFreeGameById);
router.put(":id", newFreeGameValidators, editFreeGame);
router.post("/add", newFreeGameValidators, addFreeGame);
router.delete("/:id", deleteFreeGame);

export default router;