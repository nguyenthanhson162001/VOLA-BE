import EntityID from "@domain/value-objects/EntityID";
import { Request } from "express";

export interface IGetMyInfo {
  id: string;
}

export default class GetMyInfo implements IGetMyInfo {
  private _id: string;
  constructor(req: Request) {
    this._id = req.headers.userId as string;
  }
  get id() {
    return this._id;
  }
}
