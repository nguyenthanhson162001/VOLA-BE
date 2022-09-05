"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const winston_1 = tslib_1.__importStar(require("winston"));
const { combine, timestamp, printf, colorize, simple, errors, json } = winston_1.default.format;
const format = winston_1.default.format;
const util_1 = tslib_1.__importDefault(require("util"));
const logFormat = format.printf(({ level, message, timestamp }) => {
    if (typeof message === 'object') {
        return `${timestamp} ${level}: ${util_1.default.inspect(message, { colors: true })} `;
    }
    return `${timestamp} ${level}: ${message} `;
});
const logger = winston_1.default.createLogger({
    level: 'info',
});
if (process.env.NODE_ENV === 'production') {
    var fomatcombie = combine(format.timestamp({ format: 'HH:mm:ss' }), json());
    const consoleTransport = new winston_1.transports.File({ filename: 'combined.log', format: fomatcombie });
    logger.add(consoleTransport);
}
else {
    const consoleTransport = new winston_1.transports.Console({
        format: format.combine(format.colorize(), format.simple(), format.timestamp({ format: 'HH:mm:ss' }), format.errors({ stack: true }), logFormat),
    });
    logger.add(consoleTransport);
}
exports.default = logger;
//# sourceMappingURL=logger.js.map