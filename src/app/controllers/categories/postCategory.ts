import { Request, Response } from 'express';
import { MongooseError } from 'mongoose';
import { UserModel } from '../../schemas/UserSchema';
import { isObjectValid } from '../../helpers/isObjectValid';

class PostCategoryDto {
	name = '';
	color = '';
}

export const postCategory = async (req: Request, res: Response) => {
	try {
		const validationResult = isObjectValid(PostCategoryDto, req.body);
		if (!validationResult.isValid) {
			return res.status(400).json({
				errorMessage: validationResult.text,
			});
		}

		const user = await UserModel.findById(res.locals.userId);
		if (!user) {
			return res.status(404).json({ errorMessage: 'There is no such a user' });
		}

		user.categories.push({
			...req.body,
			id: user.categories.length++,
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
