"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const ErrorHandler_1 = tslib_1.__importDefault(require("@application/middlewares/ErrorHandler"));
const me_1 = tslib_1.__importDefault(require("./me"));
const authenticate_1 = tslib_1.__importDefault(require("@application/middlewares/authenticate"));
const router = (0, express_1.Router)();
router.use(authenticate_1.default);
router.use("/me", me_1.default);
router.use(ErrorHandler_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map