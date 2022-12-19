import commentDao from "../models/comment.dao";
import { Corporation } from "../type";

const findCommentById = async (corporationId: string) => {
  return await commentDao.findCommentById(corporationId);
};

const addComment = async (content: string) => {};

const updateComment = async () => {};

const deleteComment = async () => {};

export default { findCommentById, addComment, updateComment, deleteComment };
