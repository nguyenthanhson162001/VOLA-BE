"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const firebase_admin_1 = tslib_1.__importDefault(require("firebase-admin"));
const serviceAccount_json_1 = tslib_1.__importDefault(require("./serviceAccount.json"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount_json_1.default)
});
exports.default = firebase_admin_1.default;
//# sourceMappingURL=index.js.map