import express from 'express';
import { userMiddleware } from '../middlewares/userMiddleware';
import { postCategory } from '../controllers/categories/postCategory';

// import { getCategories } from '../controllers/categories/getCategories';
// import { postCategory } from '../controllers/categories/postCategory';

export const categoriesRouter = express.Router();

// categoriesRouter.route('/').get(userMiddleware, getCategories);
categoriesRouter.route('/').post(userMiddleware, postCategory);
