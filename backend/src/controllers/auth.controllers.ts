import { Request, Response } from "express";
import { User } from "../models/user";
import { generateOtp } from "../utils/generateOTP";
import { hashPassword } from "../utils/hashPassword";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken";
import { Otp } from "../models/otp";
import { sendEmail } from "../utils/email";
import { sanitizeUser } from "../utils/sanitizeUser";

// register a new user
export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, username, email, phone, age, gender, password } = req.body;

    // check if user exists with the same email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "Email already exists, please login." });
    }

    // Hash password for secure storage
    const hashedPassword = await hashPassword(password);

    // generate 6-digit OTP
    const otp = generateOtp();

    // create new user
    const newUser = new User({
      name,
      username,
      email,
      phone,
      age,
      gender,
      password: hashedPassword,
      isVerified: false,
    });

    // save user in the db
    await newUser.save();

    // create a new OTP entry
    await Otp.create({
      email: newUser.email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    // send OTP to the user email
    await sendEmail(
      newUser.email,
      "Verify your email",
      `<p>Your OTP is: <strong>${otp}</strong></p>
      <p>It will expire in 5 minutes.</p>`
    );

    res.status(201).json({
      message:
        "Account created successful. Please verify your email using the OTP sent to your inbox.",
    });
  } catch (error) {
    console.error("Error occurred during signup:", error);
    res.status(500).json({ message: "Internal server error.", error });
  }
};

// login user
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      res.status(401).json({
        message: "Email provided does not exists, please sign up.",
      });
      return;
    }

    // ensure email is verified
    if (!existingUser.isVerified) {
      res.status(403).json({ message: "Please verify your email first." });
      return;
    }

    // validate password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      res.status(401).json({ message: "Incorrect password." });
      return;
    }

    // generate JWT token
    const token = generateToken(existingUser.id.toString());

    res.status(200).json({
      message: "Login successful.",
      token,
      user: sanitizeUser(existingUser),
    });
  } catch (error) {
    console.error("Error occurred during login:", error);
    res.status(500).json({ message: "Internal server error.", error });
  }
};

// verifies OTP
export const verifyOtp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, otp } = req.body;

    // check if OTP exists
    const otpRecord = await Otp.findOne({ email, otp });
    if (!otpRecord) {
      res.status(400).json({ message: "Invalid OTP." });
      return;
    }

    // check if OTP is used
    if (otpRecord.used) {
      res.status(400).json({ message: "OTP has already been used." });
      return;
    }

    // check if OTP is expired
    if (otpRecord.expiresAt < new Date()) {
      res.status(400).json({ message: "OTP has expired." });
      return;
    }

    // mark user as verified
    await User.updateOne({ email }, { $set: { isVerified: true } });

    // remove used OTP
    otpRecord.used = true;
    await Otp.deleteMany({ email });

    res.status(200).json({ message: "Email verification successful." });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ message: "Internal server error.", error });
  }
};

// resend OTP
export const resendOtp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // check if user is already verified
    if (existingUser.isVerified) {
      res.status(400).json({ message: "User already verified." });
      return;
    }

    // generate new OTP
    const newOtp = generateOtp();

    // delete previous OTP's
    await Otp.deleteMany({ email });

    // save new OTP
    await Otp.create({
      email,
      otp: newOtp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    // send email with new OTP
    await sendEmail(
      email,
      "Your new OTP",
      `<p>Your new OTP is: <strong>${newOtp}</strong></p>
      <p>It expires in 5 minutes.</p>`
    );

    res.status(200).json({ message: "New OTP sent to your email." });
  } catch (error) {
    console.error("Error resending OTP:", error);
    res.status(500).json({ message: "Internal server error.", error });
  }
};

// forgot password
export const forgotPassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, newPassword } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    // hash new password
    const hashedPassword = await hashPassword(newPassword);
    existingUser.password = hashedPassword;
    await existingUser.save();

    res.status(200).json({ message: "Password reset successful." });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ message: "Internal server error.", error });
  }
};

// resets password
export const resetPassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { oldPassword, newPassword } = req.body;
    const userId = req.params.id;

    // check if user exists by id
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    // validate old password
    const isMatch = await bcrypt.compare(oldPassword, existingUser.password);
    if (!isMatch) {
      res.status(401).json({ message: "Incorrect old password." });
      return;
    }

    // hash new password
    const hashedPassword = await hashPassword(newPassword);
    existingUser.password = hashedPassword;
    await existingUser.save();

    res.status(200).json({ message: "Password reset successful." });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ message: "Internal server error.", error });
  }
};

// logs out user
export const logout = async (_req: Request, res: Response): Promise<void> => {
  res.status(200).json({ message: "Logout successful." });
};
