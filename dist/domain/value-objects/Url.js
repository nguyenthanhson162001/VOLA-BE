"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ValueObject_1 = tslib_1.__importDefault(require("./ValueObject"));
class Url extends ValueObject_1.default {
    static create(props) {
        const { value } = props;
        if (value === null || value === undefined || typeof value !== 'string' || value.trim() === '' || !Url.PATTERN.test(value)) {
            throw new Error('Url is invalid');
        }
        return new Url(props);
    }
    get value() {
        return this._props.value;
    }
}
exports.default = Url;
Url.PATTERN = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
//# sourceMappingURL=Url.js.map