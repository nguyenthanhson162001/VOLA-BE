"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ValueObject_1 = tslib_1.__importDefault(require("./ValueObject"));
class EntityID extends ValueObject_1.default {
    static create(props) {
        const { value } = props;
        if (value === null || value === undefined || typeof value !== 'string') {
            throw new Error('id is invalid');
        }
        return new EntityID(props);
    }
    get value() {
        return this._props.value;
    }
    equalTo(id) {
        return this.value === id.value;
    }
}
exports.default = EntityID;
//# sourceMappingURL=EntityID.js.map