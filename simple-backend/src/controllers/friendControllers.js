import { check, validationResult } from "express-validator";
import { Friend } from "../models/friend.js";

export const getFriends = async(req, res) => {
    // allow frontend to access this call
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    const friends = await Friend.find();
    res.status(200).send(friends);
};
export const getFriendById = async(req, res) => {
    let friend = await Friend.findById(req.params.id);
    res.status(200).send(friend);
};
export const getFriendByNickname = async(req, res) => {
    let result = await Friend.find({ nickname: req.query.title });
    res.status(200).send(result);
};

export const addFriend = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const friend = new Friend({
        nickname: req.body.nickname,
    });

    friend.save(friend).then((todo) => res.status(201).send(todo));
};

export const deleteFriend = async(req, res) => {
    
     Friend.findByIdAndDelete(req.params.id);
     res.status(200).send(`Deleted in friend collection`);
};
// attached as second param in a route
export const newFriendValidators = [
    check("nickname").notEmpty().withMessage("Nickname field required"),
];