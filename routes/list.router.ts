import express from "express";
import listController from "../controllers/list.controller";

const router = express.Router();

//router.get("/", listController.)
router.get("/", listController.getlist);

export default router;
