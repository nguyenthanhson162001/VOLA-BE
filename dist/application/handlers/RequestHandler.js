"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const EventDispatcher_1 = tslib_1.__importDefault(require("./EventDispatcher"));
const ErrorCollector_1 = tslib_1.__importDefault(require("../../presentation/utilities/ErrorCollector"));
let RequestHandler = class RequestHandler extends EventDispatcher_1.default {
    validate(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () { });
    }
};
tslib_1.__decorate([
    (0, inversify_1.inject)('ErrorCollector'),
    tslib_1.__metadata("design:type", ErrorCollector_1.default)
], RequestHandler.prototype, "_ec", void 0);
RequestHandler = tslib_1.__decorate([
    (0, inversify_1.injectable)()
], RequestHandler);
exports.default = RequestHandler;
//# sourceMappingURL=RequestHandler.js.map