import express from "express";
import {
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
} from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

//register
router.route("/register").post(singleUpload, register);

//login
router.route("/login").post(login);

// logout
router.route("/logout").get(logout);

// get my profile
router.route("/me").get(isAuthenticated, getMyProfile);

//Admin Routes get all users
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);

export default router;
