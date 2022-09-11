import logger from "@infrastructure/logger/logger";
import mongoose from "mongoose";
// import logger from '..//logger/Logger';

// logger.info();

const url = process.env.MONGO_URL;
const db = process.env.MONGO_DB;
logger.info(`MONGO # Connecting to ${url}/${db}`);

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL as string, {
      dbName: process.env.MONGO_DB,
      retryWrites: false,
    })
    .then(() => {
      return logger.info(
        `MONGO # Successfully connected to ${process.env.MONGO_URL}/${process.env.MONGO_DB}`
      );
    })
    .catch((error) => {
      logger.error(
        `MONGO # Error connecting to ${process.env.MONGO_URL}/${process.env.MONGO_DB}`,
        error
      );
      return process.exit(1);
    });
};
connect();

mongoose.connection.on("disconnected", connect);
