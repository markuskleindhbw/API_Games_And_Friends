import express from "express";
import {
    getSoonGames,
    getSoonGameById,
    getSoonGameByTitle,
    getSoonGameByPublisher,
    addSoonGame,
    editSoonGame,
    deleteSoonGame,
    newSoonGameValidators,
} from "../controllers/soonGameControllers.js";

const router = express.Router();

router.get("/", getSoonGames);
router.get("/search", getSoonGameByTitle);
router.get("/publisher", getSoonGameByPublisher);
router.get("/:id", getSoonGameById);
router.put("/:id", newSoonGameValidators, editSoonGame);
router.post("/add", newSoonGameValidators, addSoonGame);
router.delete("/:id", deleteSoonGame);

export default router;