import { Router } from "express";
import {getAllUsers, getUser, updateConfirmEmail, updateUser} from './user.controller.js'
const router = Router();

router.get('/',getAllUsers);
router.get('/getUser/:id',getUser)
router.patch('/updateUser/:id',updateUser)
router.patch('/updateConfirmEmail',updateConfirmEmail)
export default router;