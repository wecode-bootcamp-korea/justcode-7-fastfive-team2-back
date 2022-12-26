import express from "express";
import commentController from "../controllers/comment.contoller";

const router = express.Router();

router.get("/list/:id", commentController.findCommentById);
router.post("", commentController.addComment);
router.patch("", commentController.updateComment);
router.delete("", commentController.deleteComment);

export default router;
