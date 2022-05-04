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
    newEditSoonGameValidators,
} from "../controllers/soonGameControllers.js";

const router = express.Router();

router.get("/", getSoonGames);
router.get("/title/:title", getSoonGameByTitle);
router.get("/publisher/:publisher", getSoonGameByPublisher);
router.get("/id/:id", getSoonGameById);
router.put("/edit/:id", newEditSoonGameValidators, editSoonGame);
router.post("/add", newSoonGameValidators, addSoonGame);
router.delete("/delete/:id", deleteSoonGame);

export default router;