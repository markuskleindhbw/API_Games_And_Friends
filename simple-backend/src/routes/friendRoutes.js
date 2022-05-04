import express from "express";
import {
    getFriends,
    getFriendById,
    getFriendByNickname,
    addFriend,
    editFriend,
    deleteFriend,
    newFriendValidators,
    newEditFriendValidators
} from "../controllers/friendControllers.js";

const router = express.Router();

router.get("/", getFriends);
router.get("/id/:id", getFriendById);
router.get("/nickname/:nickname", getFriendByNickname);
router.delete("/delete/:id", deleteFriend);
router.put("/edit/:id", newEditFriendValidators, editFriend);
router.post("/add", newFriendValidators, addFriend);

export default router;