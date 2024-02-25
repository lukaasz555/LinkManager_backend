import { Request, Response } from 'express';
import { requestValidator } from '../../helpers/requestValidator';
import { PutCategoryDto } from './categories.dtos';
import { UserModel } from '../../schemas/UserSchema';

export const putCategory = async (req: Request, res: Response) => {
	try {
		requestValidator(PutCategoryDto, req.body, res);

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

		const newCategories = user.categories.map((cat) => {
			if (cat.id === res.locals.itemId) {
				const updatedCategory = Object.assign(cat, req.body);
				return updatedCategory;
			} else return cat;
		});
		user.$set('categories', newCategories);

		try {
			await user.save();
			return res.status(200).json(user.categories);
		} catch (e) {
			return res.status(500).json({
				errorMessage: 'PutCategory controller error - db save operation error',
			});
		}
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			errorMessage: 'PutCategory controller error',
		});
	}
};
