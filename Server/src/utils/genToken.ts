import jwt, { Secret } from "jsonwebtoken";

export const genToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as Secret, {
    expiresIn: 60 * 60 * 24 * 365 * 10,
  });
};
