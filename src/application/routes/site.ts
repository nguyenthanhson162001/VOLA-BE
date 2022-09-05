import { Request, Response, Router } from "express";
// import TestController from "../controllers/TestController";
const router = Router();
router.get('/',(req:Request, res:Response)=>{
	res.send(process.env.ENV)
})

router.get('/logs',(req:Request, res:Response)=>{
	res.sendFile(process.cwd()+'/combined.log') 
})

// router.get('/post', new TestController().getInput);

export default router;
