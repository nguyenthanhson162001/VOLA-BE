"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const EntityID_1 = tslib_1.__importDefault(require("@domain/value-objects/EntityID"));
const User_1 = tslib_1.__importDefault(require("@domain/entities/User"));
const inversify_1 = require("inversify");
const User_2 = tslib_1.__importDefault(require("../models/User"));
const Repository_1 = tslib_1.__importDefault(require("./Repository"));
const Url_1 = tslib_1.__importDefault(require("@domain/value-objects/Url"));
const Name_1 = tslib_1.__importDefault(require("@domain/value-objects/Name"));
const Email_1 = tslib_1.__importDefault(require("@domain/value-objects/Email"));
const Phone_1 = tslib_1.__importDefault(require("@domain/value-objects/Phone"));
const DateOfBirth_1 = tslib_1.__importDefault(require("@domain/value-objects/DateOfBirth"));
let UserRepository = class UserRepository extends Repository_1.default {
    constructor() {
        super(User_2.default);
    }
    convertEntityToDocument(entity) {
        var _a, _b, _c, _d;
        let doc = {
            _id: (_a = entity.id) === null || _a === void 0 ? void 0 : _a.value,
            name: entity.name.value,
            avatar: (_b = entity.avatar) === null || _b === void 0 ? void 0 : _b.value,
            uid: entity.uid,
            email: entity.email.value,
            provider: entity.provider,
            phone: (_c = entity.phone) === null || _c === void 0 ? void 0 : _c.value,
            sex: entity.sex,
            date_of_birth: (_d = entity.dateOfBirth) === null || _d === void 0 ? void 0 : _d.value,
            created_at: entity.createdAt || new Date(),
            updated_at: entity.updatedAt || new Date(),
        };
        let persist = new User_2.default(doc);
        return persist;
    }
    convertDocumentToEntity(persist) {
        let _a = persist.toObject(), { _id, __v } = _a, props = tslib_1.__rest(_a, ["_id", "__v"]);
        let entity = User_1.default.create({
            name: props["name"] && Name_1.default.create({ value: props["name"] }),
            avatar: props["url"] && Url_1.default.create({ value: props["url"] }),
            uid: props["uid"],
            email: props["email"] && Email_1.default.create({ value: props["email"] }),
            provider: props["provider"],
            phone: props["phone"] && Phone_1.default.create({ value: props["phone"] }),
            sex: Boolean(props["sex"]),
            dateOfBirth: props["date_of_birth"] &&
                DateOfBirth_1.default.create({ value: new Date(props["date_of_birth"]) }),
            createdAt: new Date(props["created_at"]),
            updatedAt: new Date(props["updated_at"]),
        }, EntityID_1.default.create({ value: _id.toString() }));
        return entity;
    }
    findOneByUniid(uid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!uid) {
                return null;
            }
            const doc = yield User_2.default.findOne({ uid });
            if (!doc)
                return null;
            return this.convertDocumentToEntity(doc);
        });
    }
};
UserRepository = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], UserRepository);
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map