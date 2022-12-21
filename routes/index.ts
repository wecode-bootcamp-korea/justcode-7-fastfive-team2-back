import express from "express";
import corporationRouter from "./corporation.router";
import userRouter from "./user.router";
import listRouter from "./list.router";

const router = express.Router();

router.use("/corporation", corporationRouter);
router.use("", userRouter);
router.use("/list", listRouter);

export default router;
