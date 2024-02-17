import { Request, Response } from 'express';
import UserModel from '../../schemas/UserSchema';
import { isObjectValid } from '../../helpers/isObjectValid';
import { CategoryModel } from '../../schemas/CategorySchema';
import { MongooseError } from 'mongoose';

class CreateCategoryDto {
	color = '';
	name = '';
}

export const postCategory = async (req: Request, res: Response) => {
	try {
		const user = await UserModel.findById(res.locals.userId);
		if (!user) {
			return res.status(404).json({ errorMessage: 'No such a user' });
		}

		const newObj = new CreateCategoryDto();
		const validationResult = isObjectValid<CreateCategoryDto>(newObj, req.body);
		if (!validationResult.isValid) {
			return res.status(400).json({ errorMessage: validationResult.text });
		}
		console.log('user categories length: ', user.categories.length);

		const categoriesIds = user.categories.map((x) => x.id);
		console.log('user categories ids - ', categoriesIds);

		const categoryId =
			user.categories.length === 0 ? 1 : user.categories.length++;
		const newCategory = new CategoryModel({
			id: categoryId,
			userId: res.locals.userId,
			color: req.body.color,
			name: req.body.name,
		});
		// Object.assign(newCategory, {
		// });

		// console.log(newCategory);
		// return res.status(200).json(newCategory);

		await newCategory
			.save()
			.then((x) => {
				return res.status(200).json({ categoryId: x.id });
			})
			.catch((e: MongooseError) => {
				if (e.message.includes('E11000')) {
					console.log(e.message);
					return res
						.status(409)
						.json({ errorMessage: 'Category with this name already exists' });
				} else {
					return res.status(422).json({ errorMessage: 'Something went wrong' });
				}
			});
		user.categories.push(newCategory);
		await user.save();
	} catch (err) {
		return res
			.status(500)
			.json({ errorMessage: 'PostCategory controller error' });
	}
};
