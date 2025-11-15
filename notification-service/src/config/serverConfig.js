import dotenv from "dotenv";
dotenv.config();

export const SERVER_CONFIG = {
  PORT: process.env.PORT || 3002,
  GMAIL_USER: process.env.GMAIL_USER ,
  GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ,

  DB: {
    NAME: process.env.DB_NAME || "NotificationDb",
    USER: process.env.DB_USER || "root",
    PASS: process.env.DB_PASS || "",
    HOST: process.env.DB_HOST || "localhost",
    DIALECT: process.env.DB_DIALECT || "mysql",
  },
};
