import jwt, { Secret } from "jsonwebtoken";

export const verifyToken = (token: string) => {
  if (!token) {
    return undefined;
  } else {
    const { id }: any = jwt.verify(token, process.env.JWT_SECRET as Secret);
    return id;
  }
};
