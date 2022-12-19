import myDataSource from "./index";

const findCommentById = async (corporationId: string) => {
  return await myDataSource.query(
    //comment테이블에 기업id 추가후 추가 작업
    `
    SELECT
        users.id as user_id,
        users.email ,
        comments.content,
        corporation.id ,
        comments.created_at,
        comments.updated_at
      FROM comments
      JOIN users    ON comments.user_id     = users.id
      WHERE corporation.id = ?`,
    [corporationId]
  );
};

const addComment = async (corporationId: number, content: string) => {
  await myDataSource.query(
    `
      INSERT INTO comments(
        user_id,
        content,
        posting_id
      )
      VALUES(?, ?, ?);`,
    [corporationId, content]
  );
};

const updateComment = async (commentId: number, content: string) => {
  await myDataSource.query(
    `
      UPDATE
        comments
      SET
        content = ?
      WHERE
        id = ?`,
    [content, commentId]
  );
};

const deleteComment = async (commentId: number) => {
  await myDataSource.query(
    `
    DELETE FROM
      comments
    WHERE
      id = ?`,
    [commentId]
  );
};

export default { findCommentById, addComment, updateComment, deleteComment };
