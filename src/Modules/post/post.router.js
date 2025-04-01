import { Router } from "express";
import { createPost, getAll, likePost, unlikePost } from "./post.controller.js";
import {addComment} from "./comment.controller.js"
import { auth } from "../../middleware/auth.js";
const router = Router();
router.get('/',getAll);
router.post('/createPost',auth(),createPost);
router.post('/:id/like',auth(),likePost);
router.post('/:id/unlike',auth(),unlikePost);
router.post('/:id/comment',auth(),addComment);
export default router;