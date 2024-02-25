import { Request, Response } from 'express';
import { UserModel } from '../../schemas/UserSchema';

export const deleteLink = async (req: Request, res: Response) => {
	try {
		const user = await UserModel.findById(res.locals.userId);
		if (!user) {
			return res.status(404).json({ errorMessage: 'There is no such a user' });
		}

		const newLinks = user.links.filter((link) => link.id !== res.locals.itemId);
		user.$set('links', newLinks);

		try {
			await user.save();
			return res.status(200).json(user.links);
		} catch (e) {
			return res.status(500).json({
				errorMessage: 'DeleteLink controller - db save operation error',
			});
		}
	} catch (err) {
		return res
			.status(500)
			.json({ errorMessage: 'DeleteLink controller error' });
	}
};
