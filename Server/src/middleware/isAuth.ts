import { MyContext } from "../types";
import { MiddlewareFn } from "type-graphql";
export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  if (!context.userId) {
    throw new Error("not authenticated");
  } else {
    return next();
  }
};
