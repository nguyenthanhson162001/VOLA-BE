"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ValueObject_1 = tslib_1.__importDefault(require("./ValueObject"));
class DateOfBirth extends ValueObject_1.default {
    static create(props, require) {
        const { value } = props;
        if (false) {
            throw new Error("Date is invalid");
        }
        return new DateOfBirth(props);
    }
    get value() {
        return new Date(this._props.value);
    }
    equalTo(name) {
        return this._props.value == name._props.value;
    }
}
exports.default = DateOfBirth;
//# sourceMappingURL=DateOfBirth.js.map