import { User } from "../type";
import userDao from "../models/user.dao";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

const login = async (email: string, password: string) => {
  const validateEmail = (email: string) => {
    if (!email || !email.includes("@")) {
      return false;
    }
    return true;
  };

  const validatePassword = (password: string) => {
    if (!password) {
      return false;
    }
    return true;
  };

  if (validateEmail(email) === false) {
    throw new Error("INVALID_EMAIL");
  }

  if (validatePassword(password) === false) {
    throw new Error("INVALID_PASSWORD");
  }

  let existingUser = await userDao.login(email);
  if (!existingUser) {
    const error = new Error("USER_DOES_NOT_EXIST");
    throw error;
  }

  const token = jwt.sign({ id: existingUser.id }, "jwtSecret");
  return token;
};

// const signUp = async (email: string, password: string): Promise<User> => {
//   const user = {
//     id: 1,
//     email: JSON.parse(email),
//     age: 33,
//   };
//   return user;
// };

// listInfo = [...listInfo].map(item => {
// 	return { ...item, books: JSON.parse(item.books) };
// });
// return listInfo;

export default {
  login,
};
