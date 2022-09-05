// import EntityID from '@modules/@core/domain/value-objects/EntityID';
import Entity, { IEntity } from "@domain/entities/Entity";
import Email from "@domain/value-objects/Email";
import Phone from "@domain/value-objects/Phone";
import Name from "@domain/value-objects/Name";
import Url from "@domain/value-objects/Url";
import DateOfBirth from "@domain/value-objects/DateOfBirth";
import EntityID from "../value-objects/EntityID";
// import Entity from './Entity';

export interface IUser {
  name: Name;
  avatar?: Url;
  uid: string;
  email: Email;
  provider: string;
  phone?: Phone;
  sex?: Boolean;
  dateOfBirth?: DateOfBirth;
  createdAt?: Date;
  updatedAt?: Date;
}
export default class User extends Entity<IUser> implements IUser {
  public static create(popps: IUser, id?: EntityID) {
    return new User(popps, id);
  }
  get name() {
    return this._props.name;
  }
  get avatar() {
    return this._props.avatar;
  }
  get uid() {
    return this._props.uid;
  }
  get email() {
    return this._props.email;
  }
  get provider() {
    return this._props.provider;
  }
  get phone() {
    return this._props.phone;
  }
  get sex() {
    return this._props.sex;
  }
  get dateOfBirth() {
    return this._props.dateOfBirth;
  }
  get createdAt() {
    return this._props.createdAt;
  }
  get updatedAt() {
    return this._props.updatedAt;
  }
}
