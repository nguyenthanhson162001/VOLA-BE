import { NextFunction, Request, Response } from "express";
import Ioc from "@infrastructure/inversify";
import GetMyInfoHandler from "../handlers/me/GetMyInfo";
import GetMyInfoRequest from "../../presentation/requests/me/GetMyInfo";

class MeController {
  async getMyInfo(req: Request, res: Response, next: NextFunction) {
    const handler = Ioc.get(GetMyInfoHandler);
    const data = await handler.handle(new GetMyInfoRequest(req));
    return res.status(200).json(data);
  }
}

export default new MeController();
