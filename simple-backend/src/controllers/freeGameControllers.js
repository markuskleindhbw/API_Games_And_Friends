import { body, check, validationResult } from "express-validator";
import { FreeGame } from "../models/freeGame.js";

export const getFreeGames = async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    const games = await FreeGame.find();
    res.status(200).send(games);
};
export const getFreeGameById = async (req, res) => {
    const games = await FreeGame.findById(req.params.id);
    res.status(200).send(games);
};
export const getFreeGameByTitle = async (req, res) => {
    const games = await FreeGame.find({ title: req.params.title });
    res.status(200).send(games);
};

export const getFreeGameByPublisher = async (req, res) => {
    const games = await FreeGame.find({ publisher: req.params.publisher });
    res.status(200).send(games);
}

export const addFreeGame = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const games = new FreeGame({
        title: req.body.title,
        publisher: req.body.publisher,
        fsk: req.body.fsk,
        tag: req.body.tag,
        description: req.body.description,
    });

    games.save(games).then((games) => res.status(201).send(`Added game ${games.title} in free game collection`));
};

export const editFreeGame = async (req, res) => {
    let games = await FreeGame.findById(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    await FreeGame.updateOne({ id: req.params.id }, {
        $set: {
            title: req.body.title,
            publisher: req.body.publisher,
            fsk: req.body.fsk,
            tag: req.body.tag,
            description: req.body.description,
        }
    });
    res.status(200).send(`Edited ${games.title} in free game collection`);
};

export const deleteFreeGame = async (req, res) => {
    let games = await FreeGame.findByIdAndDelete(req.params.id);
    if (games.isLength == 0) {
        return res.status(404).send(`${req.params.id} does not exist. `)
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.status(200).send(`Deleted game ${games.title} in free game collection`);
};

export const EditFreeGameValidators = [
    check("title").notEmpty().withMessage("Title field required"),
    check("publisher").notEmpty().withMessage("Publisher field required"),
    check("fsk").notEmpty().withMessage("Fsk field required"),
    check("tag").notEmpty().withMessage("Tag field required"),
    check("description").notEmpty().withMessage("Description field required"),
];

export const newFreeGameValidators = [
    check("title").notEmpty().withMessage("Title field required"),
    check("publisher").notEmpty().withMessage("Publisher field required"),
    check("fsk").notEmpty().withMessage("Fsk field required"),
    check("tag").notEmpty().withMessage("Tag field required"),
    check("description").notEmpty().withMessage("Description field required"),
];