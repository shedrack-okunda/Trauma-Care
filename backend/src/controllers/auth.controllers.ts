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
export const signup = async (req: Request, res: Response) => {
  try {
    const { name, username, email, phone, age, gender, password } = req.body;

    // check if user exists with the same email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Email already exists, please login." });
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
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(401).json({
        message: "Email provided does not exists, please sign up.",
      });
    }

    // ensure email is verified
    if (!existingUser.isVerified) {
      return res
        .status(403)
        .json({ message: "Please verify your email first." });
    }

    // validate password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password." });
    }

    // generate JWT token
    const token = generateToken(existingUser._id.toString());

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
