import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import "dotenv-safe/config";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { COOKIE_NAME, __prod__ } from "./constants";
import { resolvers } from "./generated/typegraphql-prisma";
import { PrismaClient } from "@prisma/client";
import { UserResolver } from "./resolvers/User";
import { verifyToken } from "./utils/verifyToken";

const init = async () => {
  const app = express();

  const PORT = process.env.PORT || 4000;

  const prisma = new PrismaClient({
    log: [
      {
        emit: "stdout",
        level: "query",
      },
      {
        emit: "stdout",
        level: "error",
      },
      {
        emit: "stdout",
        level: "info",
      },
      {
        emit: "stdout",
        level: "warn",
      },
    ],
  });
  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);

  app.set("proxy", 1);

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      secret: `${process.env.SESSION_SECRET}`,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        // front-end cannot access to cookies
        sameSite: "lax", //csrf
        httpOnly: true,
        secure: __prod__, // cookie only works in https, not even in localhost
        domain: __prod__ ? "" : undefined,
      },
      resave: false,
      saveUninitialized: true,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res, connection }) => {
      let token;
      if (connection) {
        token = connection.context;
      } else {
        token = req.headers.token || "";
      }
      const userId = verifyToken(token);
      return {
        req,
        res,
        prisma,
        redis,
        userId,
      };
    },
  });

  apolloServer.applyMiddleware({
    app,
    cors: { credentials: true, origin: true },
  });

  app.listen(PORT, () => {
    console.log(`server started on localhost:${PORT}`);
  });
};

init().catch((err) => {
  console.error(err);
});
