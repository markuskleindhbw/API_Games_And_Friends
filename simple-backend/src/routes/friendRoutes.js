import express from "express";
import {
    getFriends,
    getFriendById,
    getFriendByNickname,
    addFriend,
    newFriendValidators,
} from "../controllers/friendControllers.js";

const router = express.Router();

router.get("/", getFriends);
router.get("/search", getFriendByNickname);
router.get("/:id", getFriendById);
router.post("/add", newFriendValidators, addFriend);

export default router;