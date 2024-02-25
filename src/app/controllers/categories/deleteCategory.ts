import { Request, Response } from 'express';
import { UserModel } from '../../schemas/UserSchema';

export const deleteCategory = async (req: Request, res: Response) => {
	try {
		const user = await UserModel.findById(res.locals.userId);
		if (!user) {
			return res.status(404).json({ errorMessage: 'There is no such a user' });
		}

		const cat = user.categories.find((c) => c.id === res.locals.itemId);
		if (!cat) {
			return res
				.status(404)
				.json({ errorMessage: 'There is no such a category' });
		}

		const newCategories = user.categories.filter(
			(cat) => cat.id !== res.locals.itemId
		);
		user.$set('categories', newCategories);
		try {
			await user.save();
			return res.status(200).json(newCategories);
		} catch (e) {
			return res.status(500).json({
				errorMessage:
					'DeleteCategory controller error - db save operation error',
			});
		}
	} catch (err) {
		return res.status(500).json({
			errorMessage: 'DeleteCategory controller error',
		});
	}
};
