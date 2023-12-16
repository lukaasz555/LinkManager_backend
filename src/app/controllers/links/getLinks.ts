import { Request, Response } from 'express';
import mockLinks from '../../../mockData/links.json';
import { Link } from '../../models/Link';
import LinkModel from '../../schemas/LinkSchema';
import UserModel from '../../schemas/UserSchema';

const getLinks = async (req: Request, res: Response) => {
	try {
		const user = await UserModel.findById(res.locals.userId);
		if (!user) {
			return res.status(404).json({ errorMessage: 'No such a user' });
		}

		const searchValue = {};

		if (req.query.categoryId) {
			Object.assign(searchValue, { categoriesIds: req.query.categoryId });
		}
		if (req.query.favorites) {
			Object.assign(searchValue, { isFavorite: true });
		}

		const result = await LinkModel.find({
			userId: res.locals.userId,
			...searchValue,
		});

		return res.status(200).json(result);
	} catch (err) {
		return res.status(500).json({ errorMessage: 'GetLinks controller error' });
	}
};

export default getLinks;
