import commentDao from "../models/comment.dao";

const findCommentById = async (corporationId: string) => {
  return await commentDao.findCommentById(corporationId);
};

const addComment = async (corporationId: number, content: string) => {
  await commentDao.addComment(corporationId, content);
};

const updateComment = async (commentId: number, content: string) => {
  await commentDao.updateComment(commentId, content);
};

const deleteComment = async (commentId: number) => {
  await commentDao.deleteComment(commentId);
};

export default { findCommentById, addComment, updateComment, deleteComment };
