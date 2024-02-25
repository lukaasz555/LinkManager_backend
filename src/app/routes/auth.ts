import express from 'express';
import loginUser from '../controllers/auth/loginUser';
import registerUser from '../controllers/auth/registerUser';
import testAuth from '../controllers/auth/testAuth';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

// router.use(authMiddleware);
router.route('/login').post(loginUser);
router.route('/register').post(registerUser);
router.route('/test-auth').get(testAuth);

export default router;
