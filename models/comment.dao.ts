import myDataSource from "./index";

const findCommentById = async (corporationId: string) => {
  return await myDataSource.query(
    //comment테이블에 기업id 추가후 추가 작업
    `
    SELECT
        users.id as user_id,
        users.email ,
        comments.content,
        corporation.id AS corporation_id,
        comments.created_at,
        comments.updated_at
      FROM comments
      JOIN users    ON comments.user_id     = users.id
      WHERE corporation.id = ?`,
    [corporationId]
  );
};

const addComment = async (content: string) => {
  await myDataSource.query(
    //comment테이블에 기업id 추가후 추가 작업
    `
      INSERT INTO comments(
        user_id,
        content,
        posting_id
      )
      VALUES(?, ?, ?);`,
    [content]
  );
};

const updateComment = async () => {};

const deleteComment = async () => {};

export default { findCommentById, addComment, updateComment, deleteComment };
