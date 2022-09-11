"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const logger_1 = tslib_1.__importDefault(require("@infrastructure/logger/logger"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const url = process.env.MONGO_URL;
const db = process.env.MONGO_DB;
logger_1.default.info(`MONGO # Connecting to ${url}/${db}`);
const connect = () => {
    mongoose_1.default
        .connect(process.env.MONGO_URL, {
        dbName: process.env.MONGO_DB,
        retryWrites: false
    })
        .then(() => {
        return logger_1.default.info(`MONGO # Successfully connected to ${process.env.MONGO_URL}/${process.env.MONGO_DB}`);
    })
        .catch(error => {
        logger_1.default.error(`MONGO # Error connecting to ${process.env.MONGO_URL}/${process.env.MONGO_DB}`, error);
        return process.exit(1);
    });
};
connect();
mongoose_1.default.connection.on('disconnected', connect);
//# sourceMappingURL=index.js.map