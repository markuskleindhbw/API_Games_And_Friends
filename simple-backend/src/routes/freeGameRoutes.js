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
    EditFreeGameValidators,
} from "../controllers/freeGameControllers.js";

const router = express.Router();

router.get("/", getFreeGames);
router.get("/title/:title", getFreeGameByTitle);
router.get("/publisher/:publisher", getFreeGameByPublisher);
router.get("/id/:id", getFreeGameById);
router.put("/edit/:id", EditFreeGameValidators, editFreeGame);
router.post("/add", newFreeGameValidators, addFreeGame);
router.delete("/delete/:id", deleteFreeGame);

export default router;