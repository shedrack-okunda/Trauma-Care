// import express from "express";
import express from "express";
import {
  forgotPassword,
  login,
  logout,
  resendOtp,
  resetPassword,
  signup,
  verifyOtp,
} from "../controllers/auth.controllers";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

/**
 * @swagger
 * /users:
 * get:
 *  summary: Retrieve a list of users
 *  description: Returns a list of all users
 *  responses:
 *  200:
 *    description: A list of users.
 *    content:
 *      application/json:
 *        schema:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              id:
 *                type: integer
 *                example: 1
 *               name:
 *                type: string
 *                example: John Doe
 */

router.post("/signup", signup);
router.post("/login", login);
router.post("/verify-otp", verifyOtp);
router.post("/resend-otp", resendOtp);
router.post("/forgot-password", forgotPassword);

// protected routes
router.post("/reset-password/:id", protect, resetPassword);
router.post("/logout", protect, logout);

export default router;
