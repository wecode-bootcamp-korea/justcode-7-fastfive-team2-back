import myDataSource from "./index";

// const createUser = async (email: string, password: string) => {};

const login = async (email: string) => {
  // user 존재 체크
  const [existingUser] = await myDataSource.query(`
SELECT id, password FROM users WHERE email = '${email}'`);
  return existingUser;
};

export default {
  login,
};
