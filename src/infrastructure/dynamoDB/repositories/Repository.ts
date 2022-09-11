import { Model, Document } from "mongoose";

import EntityID from "@domain/value-objects/EntityID";
import { IEntity } from "@domain/entities/Entity";
import IRepository from "@domain/repositories/IRepository";

export default abstract class Repository<E extends IEntity>
  implements IRepository<E>
{
  private _model: Model<Document, {}>;

  protected constructor(model: Model<Document, {}>) {
    this._model = model;
  }

  protected abstract convertEntityToDocument(entity: E): Document;
  protected abstract convertDocumentToEntity(persist: Document): E;

  async add(entity: E): Promise<E> {
    let doc = this.convertEntityToDocument(entity);
    await this._model.create(doc);
    entity = this.convertDocumentToEntity(doc);
    return entity;
  }

  async delete(entity: E): Promise<E> {
    await this._model.deleteOne({ _id: entity.id?.value });
    return entity;
  }

  async update(entity: E): Promise<E> {
    let doc = await this._model.findOne({ _id: entity.id?.value }).exec();
    if (doc === null) throw new Error("doc not found ");

    doc.set(this.convertEntityToDocument(entity));
    await doc.save();

    return entity;
  }

  async findOneById(id: EntityID): Promise<E | null> {
    let doc = await this._model.findOne({ _id: id.value }).exec();
    if (doc === null) return null;

    let entity = this.convertDocumentToEntity(doc);
    return entity;
  }

  async all(): Promise<E[]> {
    let docs = await this._model.find().exec();

    let entities = [];
    for (let doc of docs) {
      if (doc !== null) {
        let entity = this.convertDocumentToEntity(doc);
        entities.push(entity);
      }
    }

    return entities;
  }
}
