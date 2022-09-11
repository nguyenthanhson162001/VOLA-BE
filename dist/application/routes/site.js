"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send(process.env.ENV);
});
router.get('/logs', (req, res) => {
    res.sendFile(process.cwd() + '/combined.log');
});
exports.default = router;
//# sourceMappingURL=site.js.map