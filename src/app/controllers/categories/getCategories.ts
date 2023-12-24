import { Request, Response } from 'express';
import LinkModel from '../../schemas/LinkSchema';
import UserModel from '../../schemas/UserSchema';

export const getCategories = async (req: Request, res: Response) => {
	try {
		const user = await UserModel.findById(res.locals.userId);
		if (!user) {
			return res.status(404).json({ errorMessage: 'No such a user' });
		}

		// TODO: filter by categoryId
		const result = await LinkModel.find({
			userId: res.locals.userId,
		});

		return res.status(200).json(result);
	} catch (err) {
		return res
			.status(500)
			.json({ errorMessage: 'GetCategories controller error' });
	}
};
