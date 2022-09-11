"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.send('list users');
});
exports.default = router;
//# sourceMappingURL=user.js.map