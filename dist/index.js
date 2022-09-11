"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
require("express-async-errors");
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const routes_1 = tslib_1.__importDefault(require("@application/routes"));
dotenv_1.default.config({ path: `${process.cwd()}/env/${process.env.NODE_ENV || 'development'}.env` });
require("@infrastructure/mongoose");
const app = (0, express_1.default)();
const port = Number(process.env.PORT || 5000);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use("/public", express_1.default.static("public"));
app.set("trust proxy", 1);
if (process.env.NODE_ENV !== 'production') {
    app.use((0, morgan_1.default)('dev'));
}
app.use((0, helmet_1.default)({
    contentSecurityPolicy: false,
}));
app.use('/api', routes_1.default);
app.listen(port, () => {
    console.log(`Express server started on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map