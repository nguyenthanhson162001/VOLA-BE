import { inject, injectable } from "inversify";
import RequestHandler from "../RequestHandler";
import { IGetMyInfo as IGetMyInfoRequest } from "@presentation/requests/me/GetMyInfo";
import { IGetMyInfo as IGetMyInfoResponse } from "@presentation/responses/me/GetMyInfo";
import ValidationError from "@domain/errors/ValidationError";
import IUserRepository from "@domain/repositories/IUserRepository";
import EntityID from "@domain/value-objects/EntityID";

interface ValidatedInput {
  id: EntityID;
}

@injectable()
export default class GetMyInfo extends RequestHandler<
  IGetMyInfoRequest,
  IGetMyInfoResponse
> {
  @inject("UserRepository") private _userRepository!: IUserRepository;
  async validate(request: IGetMyInfoRequest): Promise<ValidatedInput> {
    const id = EntityID.create({ value: request.id });
    if (this._ec.hasError()) {
      throw new ValidationError(this._ec.errors);
    }
    return { id };
  }

  async handle(request: IGetMyInfoRequest): Promise<IGetMyInfoResponse | null> {
    const input = await this.validate(request);
    const user = await this._userRepository.findOneById(input.id);
    if (!user) return null;
    return {
      name: user.name.value,
      email: user.email.value,
      provider: user.provider,
      avatar: user.avatar?.value,
      phone: user.phone?.value,
      sex: user.sex,
      dateOfBirth: user.dateOfBirth?.value,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
