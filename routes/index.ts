import express from "express";
import cooperationRouter from "./cooperation.router";

const router = express.Router();

router.use("/cooperation", cooperationRouter);

export default router;
