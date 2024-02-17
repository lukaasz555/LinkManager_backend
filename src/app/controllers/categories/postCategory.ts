import { Request, Response } from 'express';
import { Category } from '../../schemas/CategorySchema';
import { MongooseError } from 'mongoose';
import { UserModel } from '../../schemas/UserSchema';

export const postCategory = async (req: Request, res: Response) => {
	try {
		const testCat = {
			id: 2,
			name: '#2 React.js',
			color: '#71DBFB',
			links: [],
		};

		const user = await UserModel.findById(res.locals.userId);
		console.log('finded user (postCategory): ', user);

		if (user) {
			user.categories.push(testCat);
			await user.save();
			return res.status(200).json(user);
		}
	} catch (err) {
		console.log(err);
		return res
			.status(500)
			.json({ errorMessage: 'PostCategory controller error' });
	}
};
