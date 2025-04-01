import { Router } from "express";
import { createPost, getAll } from "./post.controller.js";
import { auth } from "../../middleware/auth.js";
const router = Router();
router.get('/',getAll);
router.post('/createPost',auth(),createPost)
export default router;