import { Router } from "express";
import {getAllUsers, getUser} from './user.controller.js'
const router = Router();

router.get('/',getAllUsers);
router.get('/getUser/:id',getUser)

export default router;