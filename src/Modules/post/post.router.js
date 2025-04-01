import { Router } from "express";
import { getAll } from "./post.controller.js";
const router = Router();
router.get('/',getAll);
export default router;