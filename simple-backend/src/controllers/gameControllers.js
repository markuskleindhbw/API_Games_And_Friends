import { check, validationResult } from "express-validator";
import { Game } from "../models/game.js";

export const getGames = async(req, res) => {
    // allow frontend to access this call
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    const games = await Game.find();
    res.status(200).send(games);
};
export const getGameById = async(req, res) => {
    let game = await Game.findById(req.params.id);
    res.status(200).send(game);
};
export const getGameByTitle = async(req, res) => {
    let result = await Game.find({ title: req.query.title });
    res.status(200).send(result);
};

export const getGameByPublisher = async(req, res) => {
    let result = await Game.find({ publisher: req.query.publisher });
    res.status(200).send(result);
}


export const addGame = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const game = new Game({
        title: req.body.title,
        publisher: req.body.publisher,
    });

    game.save(game).then((game) => res.status(201).send(game));
};

// attached as second param in a route
export const newGameValidators = [
    check("title").notEmpty().withMessage("Title field required"),
    check("publisher").notEmpty().withMessage("Publisher field required"),
];