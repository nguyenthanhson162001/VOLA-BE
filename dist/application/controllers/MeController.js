"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = tslib_1.__importDefault(require("@infrastructure/inversify"));
const GetMyInfo_1 = tslib_1.__importDefault(require("../handlers/me/GetMyInfo"));
const GetMyInfo_2 = tslib_1.__importDefault(require("../../presentation/requests/me/GetMyInfo"));
class MeController {
    getMyInfo(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const handler = inversify_1.default.get(GetMyInfo_1.default);
            const data = yield handler.handle(new GetMyInfo_2.default(req));
            return res.status(200).json(data);
        });
    }
}
exports.default = new MeController();
//# sourceMappingURL=MeController.js.map