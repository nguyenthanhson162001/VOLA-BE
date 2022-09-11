"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const MeController_1 = tslib_1.__importDefault(require("../controllers/MeController"));
const router = (0, express_1.Router)();
router.get("/", MeController_1.default.getMyInfo);
exports.default = router;
//# sourceMappingURL=me.js.map