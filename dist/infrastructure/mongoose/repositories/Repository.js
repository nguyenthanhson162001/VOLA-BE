"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class Repository {
    constructor(model) {
        this._model = model;
    }
    add(entity) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let doc = this.convertEntityToDocument(entity);
            yield this._model.create(doc);
            entity = this.convertDocumentToEntity(doc);
            return entity;
        });
    }
    delete(entity) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._model.deleteOne({ _id: (_a = entity.id) === null || _a === void 0 ? void 0 : _a.value });
            return entity;
        });
    }
    update(entity) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let doc = yield this._model.findOne({ _id: (_a = entity.id) === null || _a === void 0 ? void 0 : _a.value }).exec();
            if (doc === null)
                throw new Error("doc not found ");
            doc.set(this.convertEntityToDocument(entity));
            yield doc.save();
            return entity;
        });
    }
    findOneById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let doc = yield this._model.findOne({ _id: id.value }).exec();
            if (doc === null)
                return null;
            let entity = this.convertDocumentToEntity(doc);
            return entity;
        });
    }
    all() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let docs = yield this._model.find().exec();
            let entities = [];
            for (let doc of docs) {
                if (doc !== null) {
                    let entity = this.convertDocumentToEntity(doc);
                    entities.push(entity);
                }
            }
            return entities;
        });
    }
}
exports.default = Repository;
//# sourceMappingURL=Repository.js.map