import { check, validationResult } from "express-validator";
import { Friend } from "../models/friend.js";

export const getFriends = async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    const friends = await Friend.find();
    res.status(200).send(friends);
};
export const getFriendById = async (req, res) => {
    const friends = await Friend.findById(req.params.id);
    res.status(200).send(friends);
};
export const getFriendByNickname = async (req, res) => {
    const friends = await Friend.find({ nickname: req.params.nickname });
    res.status(200).send(friends);
};

export const addFriend = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const friend = new Friend({
        nickname: req.body.nickname,
        onlineStatus: req.body.onlineStatus,
        description: req.body.description,
        age: req.body.age,
        gender: req.body.gender,
    });

    friend.save(friend).then((friend) => res.status(201).send(`Added new friend ${friend.nickname} to friend collection`));
};

export const editFriend = async (req, res) => {
    let friends = await Friend.findById(req.params.id);
    if (!friends) {
        return res.status(404).send(`${req.params.id} does not exist. `)
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    await Friend.updateOne({ id: req.params.id }, {
        $set: {
            nickname: req.body.nickname,
            onlineStatus: req.body.onlineStatus,
            description: req.body.description,
            age: req.body.age,
            gender: req.body.gender,
        }
    });
    res.status(200).send(`Edited ${friends.nickname} in friends collection`);
};


export const deleteFriend = async (req, res) => {
    let friends = await Friend.findByIdAndDelete(req.params.id);
    if (friends.isLength == 0) {
        return res.status(404).send(`${req.params.id} does not exist. `)
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.status(200).send(`Deleted friend ${friends.nickname} in friend collection`);
};
export const newEditFriendValidators = [
    check("nickname").notEmpty().withMessage("Nickname field required"),
    check("onlineStatus").notEmpty().withMessage("Online status field required"),
    check("age").notEmpty().withMessage("Age field required"),
    check("description").notEmpty().withMessage("Description field required"),
    check("gender").notEmpty().withMessage("Gender field required"),
];
export const newFriendValidators = [
    check("nickname").notEmpty().withMessage("Nickname field required"),
    check("onlineStatus").notEmpty().withMessage("Online status field required"),
    check("age").notEmpty().withMessage("Age field required"),
    check("description").notEmpty().withMessage("Description field required"),
    check("gender").notEmpty().withMessage("Gender field required"),
];