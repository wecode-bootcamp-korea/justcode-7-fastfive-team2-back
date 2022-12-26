import express from "express";
import subhomeController from "../controllers/subhome.controller";

const router = express.Router();

router.get("/", subhomeController.getSubhome);

export default router;
