"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
console.info(`MONGO # Connecting to ${process.env.MONGO_URL}/${process.env.MONGO_DB}`);
const connect = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const uri = `${process.env.MONGO_URL}`;
    mongoose_1.default
        .connect(uri, {
        dbName: process.env.MONGO_DB,
    })
        .then(() => {
        console.info(`MONGO # Successfully connected to ${process.env.MONGO_URL}/${process.env.MONGO_DB}`);
    }, (err) => {
        console.error(`MONGO # Error connecting to ${process.env.MONGO_URL}/${process.env.MONGO_DB}`, err);
        return process.exit(1);
    });
});
connect();
mongoose_1.default.connection.on('disconnected', connect);
//# sourceMappingURL=index.js.map