"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const inversify_1 = require("inversify");
const UserRepository_1 = tslib_1.__importDefault(require("@infrastructure/mongoose/repositories/UserRepository"));
const ErrorCollector_1 = tslib_1.__importDefault(require("@presentation/utilities/ErrorCollector"));
const container = new inversify_1.Container({
    autoBindInjectable: true,
    skipBaseClassChecks: true,
});
container.bind("ErrorCollector").to(ErrorCollector_1.default);
container.bind("UserRepository").to(UserRepository_1.default);
exports.default = container;
//# sourceMappingURL=index.js.map