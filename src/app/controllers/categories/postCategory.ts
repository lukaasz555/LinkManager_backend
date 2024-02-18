import { Request, Response } from 'express';
import { MongooseError } from 'mongoose';
import { UserModel } from '../../schemas/UserSchema';
import { isObjectValid } from '../../helpers/isObjectValid';
import { requestValidator } from '../../helpers/requestValidator';
import { getIncrementedId } from '../../helpers/getIncrementedId';
import { PostCategoryDto } from './categories.dtos';

export const postCategory = async (req: Request, res: Response) => {
	try {
		requestValidator(PostCategoryDto, req.body, res);
		const user = await UserModel.findById(res.locals.userId);
		if (!user) {
			return res.status(404).json({ errorMessage: 'There is no such a user' });
		}

		user.categories.push({
			...req.body,
			id: getIncrementedId(user.categories),
		});
		await user.save();
		return res.status(200).json(user);
	} catch (err) {
		console.log(err);
		return res
			.status(500)
			.json({ errorMessage: 'PostCategory controller error' });
	}
};
