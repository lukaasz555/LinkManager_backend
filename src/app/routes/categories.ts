import { Router, Request, Response } from 'express';
import { userMiddleware } from '../middlewares/userMiddleware';
import { postCategory } from '../controllers/categories/postCategory';
import { putCategory } from '../controllers/categories/putCategory';
import { idMiddleware } from '../middlewares/idMiddleware';
import { deleteCategory } from '../controllers/categories/deleteCategory';

export const categoriesRouter = Router();

categoriesRouter.route('/:id').put(userMiddleware, idMiddleware, putCategory);
categoriesRouter
	.route('/:id')
	.delete(userMiddleware, idMiddleware, deleteCategory);
categoriesRouter.route('/').post(userMiddleware, postCategory);
categoriesRouter.route('*').all((req: Request, res: Response) => {
	return res.status(404).json({ errorMessage: "Endpoint doesn't exist" });
});
