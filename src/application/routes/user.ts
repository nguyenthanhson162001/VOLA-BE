import { Router } from "express";
// import TestController from "../controllers/TestController";

const router = Router();

router.get('/', (req,res,next)=>{
    res.send('list users')
});

export default router;
