"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetMyInfo {
    constructor(req) {
        this._id = req.headers.userId;
    }
    get id() {
        return this._id;
    }
}
exports.default = GetMyInfo;
//# sourceMappingURL=GetMyInfo.js.map