import { Router } from "express";
import {getAllUsers, getUser, updateUser} from './user.controller.js'
const router = Router();

router.get('/',getAllUsers);
router.get('/getUser/:id',getUser)
router.patch('/updateUser/:id',updateUser)
export default router;