"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
exports.default = mongoose_1.default.model("users", new mongoose_1.default.Schema({
    name: String,
    avatar: String,
    uid: { type: String, required: true },
    email: String,
    provider: String,
    phone: String,
    sex: { type: Boolean, default: true },
    date_of_birth: Date,
    created_at: { type: Date, required: false },
    updated_at: { type: Date, required: false, default: Date.now() },
}));
//# sourceMappingURL=User.js.map