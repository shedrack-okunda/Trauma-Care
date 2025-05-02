import bcrypt from "bcryptjs";

export const comparePassword = async (
  inputPassword: string,
  storedHash: string
): Promise<boolean> => {
  return bcrypt.compare(inputPassword, storedHash);
};
