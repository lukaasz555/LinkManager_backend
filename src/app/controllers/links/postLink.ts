import { RequestHandler } from 'express';
import { isObjectValid } from '../../helpers/isObjectValid';
import { LinkBaseData } from '../../models/Link';
import { Request, Response } from 'express';
import { UserModel } from '../../schemas/UserSchema';

// export const postLink = async (req: Request, res: Response) => {
// 	try {
// 		const linkBaseData = new LinkBaseData();
// 		const validationResult = isObjectValid(linkBaseData, req.body);

// 		if (!validationResult.isValid) {
// 			// return res.status(400).json({
// 			// 	errorMessage: validationResult.text,
// 			// });
// 			return res.status(400).json({});
// 		}

// 		const newLink = new LinkModel();
// 		Object.assign(newLink, req.body, { userId: res.locals.userId });

// 		const savedItem = await newLink.save();

// 		return res.status(201).json(savedItem);
// 	} catch (e) {
// 		console.log(e);
// 		return res.status(500).json({ errorMessage: 'PostLink controller error' });
// 	}
// };

export const postLink = async (req: Request, res: Response) => {
	try {
		const user = await UserModel.findById(res.locals.userId);
		const testLink1 = {
			title: 'React.js first article',
			url: 'https://somelink2.example.com/asdfdsfsdfsd',
			isFavorite: true,
			notes: null,
			categoryId: 2,
		};

		if (user) {
			console.log('FINDED USER ! I Should puish link to array ~!');
			user.links.push(testLink1);
			await user.save();
			console.log('link is pushed to user -> ', user.links);
			return res.status(200).json(user || 'ok');
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ errorMessage: 'PostLink controller error' });
	}
};
