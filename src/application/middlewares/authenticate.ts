import { NextFunction, Request, Response } from "express";
import firebaseAdmin from "@infrastructure/firebase";
import HeaderTokenInvalidError from "@domain/errors/HeaderTokenInvalidError";
import IUserRepository from "@domain/repositories/IUserRepository";
import Ioc from "@infrastructure/inversify";
import User from "@domain/entities/User";
import Name from "@domain/value-objects/Name";
import Url from "@domain/value-objects/Url";
import Email from "@domain/value-objects/Email";
export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1] as string;
  if (!token) {
    throw new HeaderTokenInvalidError("authorization token is required");
  }
  try {
    const decodeValue = await firebaseAdmin.auth().verifyIdToken(token);
    if (!decodeValue) {
      throw new Error();
    }
    const { name, uid, picture, firebase, email } = decodeValue as any;
    const userRepository: IUserRepository = Ioc.get("UserRepository");
    let user = await userRepository.findOneByUniid(decodeValue.uid);
    if (!user) {
      // create new user
      user = await userRepository.add(
        User.create({
          name: Name.create({ value: name }),
          avatar: Url.create({ value: picture }),
          uid: uid,
          provider: firebase["sign_in_provider"],
          email: Email.create({ value: email }),
        })
      );
    }
    req.headers.userId = user.id?.value;
    return next();
  } catch (error) {
    throw new HeaderTokenInvalidError("authorization token invalid");
  }
};
