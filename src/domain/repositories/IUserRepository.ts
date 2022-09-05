import EntityID from "@domain/value-objects/EntityID";
import User from "../entities/User";
import IRepository from "./IRepository";

export default interface IUserRepository extends IRepository<User> {
  findOneByUniid(uid: string): Promise<User | null>;
}
