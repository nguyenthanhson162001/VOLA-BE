"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const RequestHandler_1 = tslib_1.__importDefault(require("../RequestHandler"));
const ValidationError_1 = tslib_1.__importDefault(require("@domain/errors/ValidationError"));
const EntityID_1 = tslib_1.__importDefault(require("@domain/value-objects/EntityID"));
let GetMyInfo = class GetMyInfo extends RequestHandler_1.default {
    validate(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const id = EntityID_1.default.create({ value: request.id });
            if (this._ec.hasError()) {
                throw new ValidationError_1.default(this._ec.errors);
            }
            return { id };
        });
    }
    handle(request) {
        var _a, _b, _c;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const input = yield this.validate(request);
            const user = yield this._userRepository.findOneById(input.id);
            if (!user)
                return null;
            return {
                name: user.name.value,
                email: user.email.value,
                provider: user.provider,
                avatar: (_a = user.avatar) === null || _a === void 0 ? void 0 : _a.value,
                phone: (_b = user.phone) === null || _b === void 0 ? void 0 : _b.value,
                sex: user.sex,
                dateOfBirth: (_c = user.dateOfBirth) === null || _c === void 0 ? void 0 : _c.value,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            };
        });
    }
};
tslib_1.__decorate([
    (0, inversify_1.inject)("UserRepository"),
    tslib_1.__metadata("design:type", Object)
], GetMyInfo.prototype, "_userRepository", void 0);
GetMyInfo = tslib_1.__decorate([
    (0, inversify_1.injectable)()
], GetMyInfo);
exports.default = GetMyInfo;
//# sourceMappingURL=GetMyInfo.js.map