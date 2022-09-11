// import EntityID from "@domain/value-objects/EntityID";
// import User from "@domain/entities/User";
// import IUserRepository from "@domain/repositories/IUserRepository";
// import { injectable } from "inversify";
// import { UserModel } from "..//index";
// import { Document } from "mongoose";
// import Repository from "./Repository";
// import Url from "@domain/value-objects/Url";
// import Name from "@domain/value-objects/Name";
// import Email from "@domain/value-objects/Email";
// import Phone from "@domain/value-objects/Phone";
// import DateOfBirth from "@domain/value-objects/DateOfBirth";
// @injectable()
// export default class UserRepository
//   extends Repository<User>
//   implements IUserRepository
// {
//   public constructor() {
//     super(UserModel as any);
//   }

//   protected convertEntityToDocument(entity: User): Document<any, any, any> {
//     let doc = {
//       _id: entity.id?.value,
//       name: entity.name.value,
//       avatar: entity.avatar?.value,
//       uid: entity.uid,
//       email: entity.email.value,
//       provider: entity.provider,
//       phone: entity.phone?.value,
//       sex: entity.sex,
//       date_of_birth: entity.dateOfBirth?.value,
//       created_at: entity.createdAt || new Date(),
//       updated_at: entity.updatedAt || new Date(),
//     } as any;
//     let persist = new UserModel(doc);
//     return persist;
//   }

//   protected convertDocumentToEntity(persist: Document): User {
//     let { _id, __v, ...props } = persist.toObject() as any;
//     let entity = User.create(
//       {
//         name: props["name"] && Name.create({ value: props["name"] }),
//         avatar: props["url"] && Url.create({ value: props["url"] }),
//         uid: props["uid"],
//         email: props["email"] && Email.create({ value: props["email"] }),
//         provider: props["provider"],
//         phone: props["phone"] && Phone.create({ value: props["phone"] }),
//         sex: Boolean(props["sex"]),
//         dateOfBirth:
//           props["date_of_birth"] &&
//           DateOfBirth.create({ value: new Date(props["date_of_birth"]) }),
//         createdAt: new Date(props["created_at"]),
//         updatedAt: new Date(props["updated_at"]),
//       },
//       EntityID.create({ value: _id.toString() })
//     );
//     return entity;
//   }
//   async findOneByUniid(uid: string): Promise<User | null> {
//     if (!uid) {
//       return null;
//     }
//     const doc = await UserModel.findOne({ uid });
//     if (!doc) return null;
//     return this.convertDocumentToEntity(doc);
//   }
// }
