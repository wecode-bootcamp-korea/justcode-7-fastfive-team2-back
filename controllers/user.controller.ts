import express from "express";
import userService from "../services/user.service";
import { checkDataIsNotEmpty } from "../util/myutil";

const logIn = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  checkDataIsNotEmpty({ email, password });

  const login = await userService.login(email, password);

  res.status(201).json({ message: "로그인 완료", login });
};

export default { logIn };
