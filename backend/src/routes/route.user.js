import {register, Login, updateUser, deleteUser} from '../controllers/user.controller.js';
import {Router} from 'express';

const router = Router();

router.post('/register', register);
router.post('/login', Login);
router.put('/update/user/:id', updateUser);
router.delete('/delete/user/:id', deleteUser);


export default router;