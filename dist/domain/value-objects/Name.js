"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ValueObject_1 = tslib_1.__importDefault(require("./ValueObject"));
class Name extends ValueObject_1.default {
    static create(props) {
        const { value } = props;
        if ((value === null || value === undefined || typeof value !== 'string' || value.trim() === '')) {
            throw new Error('Name is invalid');
        }
        return new Name(props);
    }
    get value() {
        return this._props.value;
    }
    equalTo(name) {
        return this._props.value == name._props.value;
    }
}
exports.default = Name;
//# sourceMappingURL=Name.js.map