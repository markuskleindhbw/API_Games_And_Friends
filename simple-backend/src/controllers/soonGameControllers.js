import { check, validationResult } from "express-validator";
import { SoonGame } from "../models/soonGame.js";

export const getSoonGames = async (req, res) => {
    // allow frontend to access this call
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    const soongames = await SoonGame.find();
    res.status(200).send(soongames);
};
export const getSoonGameById = async (req, res) => {
    const soongames = await SoonGame.findById(req.params.id);
    res.status(200).send(soongames);
};
export const getSoonGameByTitle = async (req, res) => {
    const soongames = await SoonGame.find({ title: req.params.title });
    res.status(200).send(soongames);
};

export const getSoonGameByPublisher = async (req, res) => {
    const soongames = await SoonGame.find({ publisher: req.params.publisher });
    res.status(200).send(soongames);
}


export const addSoonGame = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const soongames = new SoonGame({
        title: req.body.title,
        publisher: req.body.publisher,
        fsk: req.body.fsk,
        tag: req.body.tag,
        description: req.body.description,
    });

    soongames.save(soongames).then((soongames) => res.status(201).send(`Added new game ${soongames.title} to the collection`));
};

export const editSoonGame = async (req, res) => {
    let soongames = await SoonGame.findById(req.params.id);
    if (!soongames) {
        return res.status(404).send(`${req.params.id} does not exist. `)
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    await SoonGame.updateOne({ id: req.params.id }, {
        $set: {
            title: req.body.title,
            publisher: req.body.publisher,
            fsk: req.body.fsk,
            tag: req.body.tag,
            description: req.body.description,
        }
    });
    res.status(200).send(`Edited ${soongames.title} in soon available game collection`);
};
export const deleteSoonGame = async (req, res) => {
    let soongames = await SoonGame.findByIdAndDelete(req.params.id);
    if (soongames.isLength == 0) {
        return res.status(404).send(`${req.params.id} does not exist. `)
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.status(200).send(`Deleted ${soongames.title} in soon available game collection`);
};
export const newEditSoonGameValidators = [
    check("title").notEmpty().withMessage("Title field required"),
    check("publisher").notEmpty().withMessage("Publisher field required"),
    check("fsk").notEmpty().withMessage("Fsk field required"),
    check("tag").notEmpty().withMessage("Tags field required"),
    check("description").notEmpty().withMessage("Description field required"),
];
export const newSoonGameValidators = [
    check("title").notEmpty().withMessage("Title field required"),
    check("publisher").notEmpty().withMessage("Publisher field required"),
    check("fsk").notEmpty().withMessage("Fsk field required"),
    check("tag").notEmpty().withMessage("Tags field required"),
    check("description").notEmpty().withMessage("Description field required"),
];