import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";
import { Redis } from "ioredis";

export type MyContext = {
  req: Request;
  res: Response;
  prisma: PrismaClient;
  redis: Redis;
  userId: string;
};
