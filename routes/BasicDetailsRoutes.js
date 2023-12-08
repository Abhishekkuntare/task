import express from "express";
import {isAuthenticated } from "../middlewares/auth.js";

import { BasicDetailsCom } from "../controllers/BasicDetailsController.js";

const router = express.Router();

router.post("/basicdetails", isAuthenticated, BasicDetailsCom);

export default router;
