import { Router } from "express";
import { handelMenteeSignin, handelMenteeSignup} from "../controllers/user.js";

const router= Router();




router.post("/signup" , handelMenteeSignup)

router.post("/signin",handelMenteeSignin)








export default router;