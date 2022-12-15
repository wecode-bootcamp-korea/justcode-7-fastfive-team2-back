import { Request, Response } from "express";
import userService from "../services/user.service";

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

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  type required_keys = {
    email: string;
    password: string;
  };

  const login_required_keys: required_keys = {
    email,
    password,
  };

  if (!validateEmail(email)) {
    throw new Error("INVALID_EMAIL");
  }

  if (!validatePassword(password)) {
    throw new Error("INVALID_PASSWORD");
  }

  checkRequireKeys(login_required_keys);

  const login = await userService.login(email);

  res.status(201).json({ message: "로그인 완료", login });
};

// const signUp = async (req: Request, res: Response) => {
//   const email = req.query.email as string;
//   const password = req.query.password as string;
//   console.log(email);
//   if (!validateEmail(email)) {
//     throw new Error("INVALID_EMAIL");
//   }

//   if (!validatePassword(password)) {
//     throw new Error("INVALID_PASSWORD");
//   }

//   const user = await userService.signUp(email, password);

//   res.status(201).json({ message: "USER_CREATED", user });
// };

export default {
  // signUp,
  login,
};
