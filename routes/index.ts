import express from "express";
import corporationRouter from "./corporation.router";
import userRouter from "./user.router";
import listRouter from "./list.router";

import subhomeRouter from "./subhome.router";
import commentRouter from "./comment.router";

const router = express.Router();

router.use("/corporation", corporationRouter);
router.use("", userRouter);
router.use("/list", listRouter);
router.use("/subhome", subhomeRouter);
router.use("/comment", commentRouter);

export default router;
