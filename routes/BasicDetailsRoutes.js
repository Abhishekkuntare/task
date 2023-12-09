import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { BasicDetailsCon } from "../controllers/BasicDetailsController.js";

const router = express.Router();

router.post("/basicdetails", isAuthenticated, BasicDetailsCon);

export default router;
