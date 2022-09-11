"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
let EventDispatcher = class EventDispatcher {
    onDispatchEvent(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () { });
    }
    dispatchEvent(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.onDispatchEvent !== null || this.onDispatchEvent instanceof Function) {
                this.onDispatchEvent(event);
            }
        });
    }
};
EventDispatcher = tslib_1.__decorate([
    (0, inversify_1.injectable)()
], EventDispatcher);
exports.default = EventDispatcher;
//# sourceMappingURL=EventDispatcher.js.map