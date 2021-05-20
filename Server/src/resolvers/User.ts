import { User } from "../generated/typegraphql-prisma";
import { MyContext } from "../types";
import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from "type-graphql";
import { FieldError } from "./FieldError";
import { isAuth } from "../middleware/isAuth";
import argon from "argon2";
import { genToken } from "../utils/genToken";

@ObjectType()
class UserResponse {
  @Field(() => FieldError, { nullable: true })
  errors?: FieldError;
  @Field(() => User, { nullable: true })
  user?: User;
  @Field(() => String, { nullable: true })
  token?: String;
}
@Resolver(User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  @UseMiddleware(isAuth)
  async me(@Ctx() { userId, prisma }: MyContext): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    return user;
  }
  @Mutation(() => UserResponse)
  async signUp(
    @Arg("email") email: string,
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Ctx() { prisma }: MyContext
  ): Promise<UserResponse> {
    //find user
    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      //user exists
      return {
        errors: {
          field: "email",
          message: "that user already exists",
        },
      };
    }

    const hash = await argon.hash(password);
    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hash,
      },
    });
    const token = genToken(newUser.id);
    return { token, user: newUser };
  }
  @Mutation(() => UserResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() { prisma }: MyContext
  ): Promise<UserResponse> {
    //find user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      //user doesn't exist
      return {
        errors: {
          field: "email",
          message: "that user doesn't exist",
        },
      };
    }
    // verify password
    const valid = await argon.verify(user.password, password);
    if (!valid) {
      // password is wrong
      return {
        errors: {
          field: "password",
          message: "incorrect password",
        },
      };
    }
    // if no errors => store id in session
    const token = genToken(user.id);
    return { token, user };
  }
  @FieldResolver(() => Number)
  async followerCount(
    @Root() user: User,
    @Ctx() { prisma }: MyContext
  ): Promise<number> {
    return (
      await prisma.user.findUnique({ where: { id: user.id } }).followedBy()
    ).length;
  }
}
