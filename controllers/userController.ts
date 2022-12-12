import { Request, Response } from "express";
import userService from "../services/userService";

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

const signUp = async (req: Request, res: Response) => {
  const email = req.query.email as string;
  const password = req.query.password as string;
  console.log(email);
  if (!validateEmail(email)) {
    throw new Error("INVALID_EMAIL");
  }

  if (!validatePassword(password)) {
    throw new Error("INVALID_PASSWORD");
  }

  const user = await userService.signUp(email, password);

  res.status(201).json({ message: "USER_CREATED", user });
};

export default {
  signUp,
};
