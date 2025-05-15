import { Schema, model, Document } from "mongoose";

export interface IOtp extends Document {
  email: string;
  otp: string;
  createdAt: Date;
  expiresAt: Date;
  used: boolean;
}

const OtpSchema = new Schema<IOtp>(
  {
    email: { type: String, required: true },
    otp: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    used: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Otp = model<IOtp>("Otp", OtpSchema);
