import express from "express";
import corporationRouter from "./corporation.router";
import userRouter from "./user.router";

const router = express.Router();

router.use("/corporation", corporationRouter);
router.use("", userRouter);

export default router;
