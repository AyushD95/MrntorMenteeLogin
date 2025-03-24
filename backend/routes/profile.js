import {Router} from "express"
import Profile from "../controllers/profile.js";

const router=Router()

router.get("/",Profile)


export default router;
