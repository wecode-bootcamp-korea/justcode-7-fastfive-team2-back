import { Request, Response } from "express";
import commentService from "../services/comment.service";
import { checkDataIsNotEmpty } from "../util/myutil";

interface RequestWithUserRole extends Request {
  userInfo: object;
}

const findCommentById = async (req: Request, res: Response) => {
  try {
    //userInfo 들어가야함
    const corporationId = req.params.id;

    checkDataIsNotEmpty(corporationId);

    let [data]: any = await commentService.findCommentById(corporationId);

    res.status(200).json({ message: "success", data });
  } catch (err: any) {
    console.log(err);
    res.status(err.statusCode).json({ message: err.message });
  }
};

const addComment = async (req: Request, res: Response) => {
  try {
    //userInfo 들어가야함
    const content = req.body;

    checkDataIsNotEmpty(content);

    await commentService.addComment(content);

    res.status(200).json({ message: "success" });
  } catch (err: any) {
    console.log(err);
    res.status(err.statusCode).json({ message: err.message });
  }
};

const updateComment = async (req: Request, res: Response) => {
  try {
    //userInfo 들어가야함
    const { commentId, content } = req.body;

    const REQUIRED_KEYS = { commentId, content };

    checkDataIsNotEmpty(REQUIRED_KEYS);

    await commentService.updateComment(commentId, content);

    res.status(200).json({ message: "success" });
  } catch (err: any) {
    console.log(err);
    res.status(err.statusCode).json({ message: err.message });
  }
};

const deleteComment = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.body;

    const REQUIRED_KEYS = { commentId };

    checkDataIsNotEmpty(REQUIRED_KEYS);

    await commentService.deleteComment(commentId);

    res.status(200).json({ message: "success" });
  } catch (err: any) {
    console.log(err);
    res.status(err.statusCode).json({ message: err.message });
  }
};

export default { findCommentById, addComment, updateComment, deleteComment };
