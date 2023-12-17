import express from 'express';
import loginUser from '../controllers/auth/loginUser';
import registerUser from '../controllers/auth/registerUser';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.use(authMiddleware);
router.route('/login').post(loginUser);
router.route('/register').post(registerUser);

export default router;
