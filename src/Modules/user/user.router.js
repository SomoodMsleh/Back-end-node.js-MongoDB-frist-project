import { Router } from "express";
import {deleteUser, getAllUsers, getUser, updateConfirmEmail, updateUser} from './user.controller.js'
const router = Router();

router.get('/',getAllUsers);
router.get('/getUser/:id',getUser);
router.patch('/updateUser/:id',updateUser);
router.patch('/updateConfirmEmail',updateConfirmEmail);
router.delete('/deleteUser/:id',deleteUser);
export default router;