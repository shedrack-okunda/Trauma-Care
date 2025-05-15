import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { User } from "../models/user";

// Extend Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  //   check for token
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, token missing." });
  }

  //   Extract the token
  const token = authHeader.split(" ")[1];

  try {
    // verifies the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    // find the user from the db
    const user = await User.findById((decoded as any).id).select("-password");

    // deny access if no user found
    if (!user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    // attach user to request and move on
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token filed or expired.", error });
  }
};
