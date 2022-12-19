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
  } catch (err) {}
};

const deleteComment = async (req: Request, res: Response) => {
  try {
  } catch (err) {}
};

export default { findCommentById, addComment, updateComment, deleteComment };
