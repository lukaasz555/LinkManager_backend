import { RequestHandler } from 'express';
import { isObjectValid } from '../../helpers/isObjectValid';
import { LinkBaseData } from '../../models/Link';
import { Request, Response } from 'express';
import { UserModel } from '../../schemas/UserSchema';
import { requestValidator } from '../../helpers/requestValidator';
import { getIncrementedId } from '../../helpers/getIncrementedId';
import { PostLinkDto } from './links.dtos';

export const postLink = async (req: Request, res: Response) => {
	try {
		requestValidator(PostLinkDto, req.body, res);
		const user = await UserModel.findById(res.locals.userId);
		if (!user) {
			return res.status(404).json({ errorMessage: 'There is no such a user' });
		}

		user.links.push({
			...req.body,
			id: getIncrementedId(user.links),
		});
		await user.save();
		return res.status(200).json(user.links);
	} catch (err) {
		console.log(err);
		res.status(500).json({ errorMessage: 'PostLink controller error' });
	}
};
