import { Router } from "express";
import ErrorHandler from "@application/middlewares/ErrorHandler";
import meRoutes from "./me";
import authenticate from "@application/middlewares/authenticate";
// import UserModel from "@infrastructure/dynamoDB/models/User";

const router = Router();

router.use(authenticate);
router.use("/me", meRoutes);

router.use(ErrorHandler);

export default router;
