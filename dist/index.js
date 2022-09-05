"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT || 3000);
dotenv_1.default.config({ path: `${process.cwd()}/env/${process.env.NODE_ENV || 'development'}.env` });
app.get('/', (req, res) => {
    res.send(process.env.ENV);
});
app.get('/logs', (req, res) => {
    res.sendFile(process.cwd() + '/combined.log');
});
app.listen(port, () => {
    console.log(`Express server started on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map