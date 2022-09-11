"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Entity {
    constructor(props, id) {
        this._id = id;
        this._props = props;
    }
    get id() {
        return this._id;
    }
    get props() {
        return this._props;
    }
}
exports.default = Entity;
//# sourceMappingURL=Entity.js.map