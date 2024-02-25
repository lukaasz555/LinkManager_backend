import { Request, Response } from 'express';
import { UserModel } from '../../schemas/UserSchema';

export const getLinks = async (req: Request, res: Response) => {
	try {
		const user = await UserModel.findById(res.locals.userId);
		if (!user) {
			return res.status(404).json({ errorMessage: 'There is no such a user' });
		}

		if (req.query.categoryId) {
			if (!isNaN(Number(req.query.categoryId))) {
				const links = user.links.filter(
					(link) => link.categoryId == Number(req.query.categoryId)
				);
				return res.status(200).json(links);
			} else {
				return res.status(400).json({ errorMessage: 'Invalid category ID' });
			}
		}

		return res.status(200).json(user.links);
	} catch (err) {
		console.log('err');
		return res.status(500).json({ errorMessage: 'GetLinks controller error' });
	}
};
