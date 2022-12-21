import express from "express";
import listController from "../controllers/list.controller";

const router = express.Router();

router.get("/", listController.getlist);
router.get("/:id", listController.getlistbyCategory);

export default router;
