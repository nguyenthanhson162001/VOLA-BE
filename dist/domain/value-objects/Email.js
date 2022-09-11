"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ValueObject_1 = tslib_1.__importDefault(require("./ValueObject"));
class Text extends ValueObject_1.default {
    static create(props, require) {
        const { value } = props;
        if ((value === null || value === undefined || typeof value !== 'string' || value.trim() === '') && require) {
            throw new Error('Email is invalid');
        }
        return new Text(props);
    }
    get value() {
        return this._props.value;
    }
    equalTo(name) {
        return this._props.value == name._props.value;
    }
}
exports.default = Text;
//# sourceMappingURL=Email.js.map