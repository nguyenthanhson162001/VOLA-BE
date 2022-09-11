"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Entity_1 = tslib_1.__importDefault(require("@domain/entities/Entity"));
class User extends Entity_1.default {
    static create(popps, id) {
        return new User(popps, id);
    }
    get name() {
        return this._props.name;
    }
    get avatar() {
        return this._props.avatar;
    }
    get uid() {
        return this._props.uid;
    }
    get email() {
        return this._props.email;
    }
    get provider() {
        return this._props.provider;
    }
    get phone() {
        return this._props.phone;
    }
    get sex() {
        return this._props.sex;
    }
    get dateOfBirth() {
        return this._props.dateOfBirth;
    }
    get createdAt() {
        return this._props.createdAt;
    }
    get updatedAt() {
        return this._props.updatedAt;
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map