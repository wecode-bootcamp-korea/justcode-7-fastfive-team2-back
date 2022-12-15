import express from "express";
import cooperationRouter from "./cooperation.router";
import corporationRouter from "./corporation.router";

const router = express.Router();

router.use("/cooperation", cooperationRouter);
router.use("/corporation", corporationRouter);

export default router;
