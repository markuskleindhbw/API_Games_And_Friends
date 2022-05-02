import { check, validationResult } from "express-validator";
import { FreeGame } from "../models/freeGame.js";

export const getFreeGames = async(req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    const games = await FreeGame.find();
    res.status(200).send(games);
};
export const getFreeGameById = async (req, res) => {
    let freeGame = await FreeGame.findById(req.params.id);
    res.status(200).send(freeGame);
};
export const getFreeGameByTitle = async(req, res) => {
    let result = await FreeGame.find({ title: req.query.title });
    res.status(200).send(result);
};

export const getFreeGameByPublisher = async(req, res) => {
    let result = await FreeGame.find({ publisher: req.query.publisher });
    res.status(200).send(result);
}

export const addFreeGame = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const game = new FreeGame({
        title: req.body.title,
        publisher: req.body.publisher,
    });

    game.save(game).then((todo) => res.status(201).send(todo));
};

export const editFreeGame = async(req, res) => {
    let freeGame = await FreeGame.find((fg) => fg.id == req.params.id);
    res.status(200).send(`Edited ${ freeGame.title} in free game collection`);
};


export const deleteFreeGame = async (req, res) => {
    await FreeGame.findByIdAndDelete(req.params.id);
    res.status(200).send(`Deleted in free game collection`);
};

export const newFreeGameValidators = [
    check("title").notEmpty().withMessage("Title field required"),
    check("publisher").notEmpty().withMessage("Publisher field required"),
];