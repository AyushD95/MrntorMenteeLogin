import { Router } from "express";
import { handelMentorSignup, handelMentorSignin} from "../controllers/mentor.js";

const router= Router();




router.post("/signup" , handelMentorSignup)

router.post("/signin",handelMentorSignin)








export default router;