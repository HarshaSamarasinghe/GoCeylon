import express from "express";
import {
  loginUser,
  registerUser,
  listUsers,
  removeUser,
  profileInfo,
  updateProfile,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// Authenticated user
router.get("/me", authMiddleware, profileInfo);
router.put("/me", authMiddleware, updateProfile);

// Admin-level actions (optional: add role check middleware)
router.get("/", listUsers);
router.delete("/", removeUser);

export default router;
