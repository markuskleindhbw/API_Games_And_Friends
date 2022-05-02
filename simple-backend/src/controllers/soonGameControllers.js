import { check, validationResult } from "express-validator";
import { SoonGame } from "../models/soonGame.js";

export const getSoonGames = async(req, res) => {
    // allow frontend to access this call
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    const games = await SoonGame.find();
    res.status(200).send(games);
};
export const getSoonGameById = async(req, res) => {
    let game = await SoonGame.findById(req.params.id);
    res.status(200).send(game);
};
export const getSoonGameByTitle = async(req, res) => {
    let result = await SoonGame.find({ title: req.query.title });
    res.status(200).send(result);
};

export const getSoonGameByPublisher = async(req, res) => {
    let result = await SoonGame.find({ publisher: req.query.publisher });
    res.status(200).send(result);
}


export const addSoonGame = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const game = new SoonGame({
        title: req.body.title,
        publisher: req.body.publisher,
    });

    game.save(game).then((todo) => res.status(201).send(todo));
};

export const editSoonGame = async(req, res) => {
    await SoonGame.findOneAndUpdate(req.params.id);

    res.status(200).send(`Edited in soon available game collection `);
};

export const deleteSoonGame = async(req, res) => {

   await SoonGame.findByIdAndDelete(req.params.id);
    res.status(200).send(`Deleted in soon available game collection`);
};

// attached as second param in a route
export const newSoonGameValidators = [
    check("title").notEmpty().withMessage("Title field required"),
    check("publisher").notEmpty().withMessage("Publisher field required"),
];