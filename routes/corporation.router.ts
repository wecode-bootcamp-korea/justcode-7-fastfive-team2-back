import express from "express";
import corporationController from "../controllers/corporation.controller";

const router = express.Router();

router.get("/:id", corporationController.findCorporationDetail);

export default router;
