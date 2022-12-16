import express from "express";
import cooperationRouter from "./cooperation.router";
import corporationRouter from "./corporation.router";
import userRouter from "./user.router";

const router = express.Router();

router.use("/cooperation", cooperationRouter);
router.use("/corporation", corporationRouter);
router.use("", userRouter);

export default router;
