"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const firebase_1 = tslib_1.__importDefault(require("@infrastructure/firebase"));
const HeaderTokenInvalidError_1 = tslib_1.__importDefault(require("@domain/errors/HeaderTokenInvalidError"));
const inversify_1 = tslib_1.__importDefault(require("@infrastructure/inversify"));
const User_1 = tslib_1.__importDefault(require("@domain/entities/User"));
const Name_1 = tslib_1.__importDefault(require("@domain/value-objects/Name"));
const Url_1 = tslib_1.__importDefault(require("@domain/value-objects/Url"));
const Email_1 = tslib_1.__importDefault(require("@domain/value-objects/Email"));
exports.default = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        throw new HeaderTokenInvalidError_1.default("authorization token is required");
    }
    try {
        const decodeValue = yield firebase_1.default.auth().verifyIdToken(token);
        if (!decodeValue) {
            throw new Error();
        }
        const { name, uid, picture, firebase, email } = decodeValue;
        const userRepository = inversify_1.default.get("UserRepository");
        let user = yield userRepository.findOneByUniid(decodeValue.uid);
        if (!user) {
            user = yield userRepository.add(User_1.default.create({
                name: Name_1.default.create({ value: name }),
                avatar: Url_1.default.create({ value: picture }),
                uid: uid,
                provider: firebase["sign_in_provider"],
                email: Email_1.default.create({ value: email }),
            }));
        }
        req.headers.userId = (_b = user.id) === null || _b === void 0 ? void 0 : _b.value;
        return next();
    }
    catch (error) {
        throw new HeaderTokenInvalidError_1.default("authorization token invalid");
    }
});
//# sourceMappingURL=authenticate.js.map