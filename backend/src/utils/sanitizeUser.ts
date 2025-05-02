import { IUser } from "../models/user";

export const sanitizeUser = (user: IUser) => {
  return {
    id: user._id,
    name: user.name,
    username: user.username,
    email: user.email,
    role: user.role,
  };
};
