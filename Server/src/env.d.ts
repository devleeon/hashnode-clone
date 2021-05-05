import { Secret } from "jsonwebtoken";

declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    PORT: string;
    SESSION_SECRET: string | string[];
    JWT_SECRET: Secret;
    REDIS_URL: string;
  }
}
