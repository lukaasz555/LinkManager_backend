import { Request, Response } from 'express';
import { UserModel } from '../../schemas/UserSchema';
import { requestValidator } from '../../helpers/requestValidator';
import { PutLinkDto } from './links.dtos';

export const putLink = async (req: Request, res: Response) => {
	try {
		console.log('putLink ', req.body);
		requestValidator(PutLinkDto, req.body, res);

		const user = await UserModel.findById(res.locals.userId);
		if (!user) {
			return res.status(404).json({ errorMessage: 'There is no such a user' });
		}

		const link = user.links.find((link) => link.id === res.locals.itemId);
		if (!link) {
			return res.status(404).json({ errorMessage: 'There is no such a link' });
		}

		const newLinks = user.links.map((link) => {
			if (link.id === res.locals.itemId) {
				const updatedLink = Object.assign(link, req.body);
				return updatedLink;
			} else return link;
		});

		user.$set('links', newLinks);

		try {
			await user.save();
			return res.status(200).json(user.links);
		} catch (e) {
			return res
				.status(500)
				.json({ errorMessage: 'PutLink controller - db save operation error' });
		}
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			errorMessage: 'PutLink controller error',
		});
	}
};
