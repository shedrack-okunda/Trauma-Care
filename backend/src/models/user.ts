import { Schema, model, Document } from "mongoose";

// Defines the interface for the user document with types
export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  role: "user" | "admin" | "mentor";
  gender: "male" | "female";
  age: number;
  emergencyContact?: string;
  isVerified?: boolean;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Creates the schema with the exact fields and validation rules
const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin", "mentor"], default: "user" },
    gender: { type: String, enum: ["male", "female"], required: true },
    age: { type: Number, required: true },
    emergencyContact: { type: String },
    isVerified: { type: Boolean, default: false },
    avatar: { type: String },
  },
  { timestamps: true }
);

export const User = model<IUser>("User", UserSchema);
