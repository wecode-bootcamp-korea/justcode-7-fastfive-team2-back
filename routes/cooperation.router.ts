import express from "express";
import cooperationController from "../controllers/cooperation.controller";

const router = express.Router();

router.post("/posting", cooperationController.posting);

export default router;
