"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
let ErrorCollector = class ErrorCollector {
    constructor() {
        this._errors = {};
    }
    get errors() {
        return this._errors;
    }
    collect(tag, method) {
        try {
            return method();
        }
        catch (error) {
            this._errors[tag] = error.message;
        }
    }
    collectAsync(tag, method) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield method();
            }
            catch (error) {
                this._errors[tag] = error.message;
            }
        });
    }
    clear() {
        this._errors = {};
    }
    hasError() {
        return Object.keys(this._errors).length > 0;
    }
};
ErrorCollector = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], ErrorCollector);
exports.default = ErrorCollector;
//# sourceMappingURL=ErrorCollector.js.map