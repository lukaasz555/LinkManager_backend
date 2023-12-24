import express from 'express';
import { userMiddleware } from '../middlewares/userMiddleware';
import { getCategories } from '../controllers/categories/getCategories';

export const categoriesRouter = express.Router();

categoriesRouter.route('/').get(userMiddleware, getCategories);
