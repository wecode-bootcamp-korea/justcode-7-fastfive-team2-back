import express from "express";
import listController from "../controllers/list.controller";

const router = express.Router();

router.get("/detail", listController.getDropdownDetail);
router.get("/info", listController.getDropdown);
router.get("/", listController.getlist);

export default router;
