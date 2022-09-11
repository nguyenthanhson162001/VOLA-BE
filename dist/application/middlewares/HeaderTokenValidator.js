"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HeaderTokenInvalidError_1 = tslib_1.__importDefault(require("@domain/errors/HeaderTokenInvalidError"));
exports.default = (headerKey, secretValue) => {
    return (req, res, next) => {
        if (req.headers[headerKey] != secretValue) {
            throw new HeaderTokenInvalidError_1.default('Cron api token is invalid');
        }
        next();
    };
};
//# sourceMappingURL=HeaderTokenValidator.js.map