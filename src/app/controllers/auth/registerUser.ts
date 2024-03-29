import { Request, Response, ErrorRequestHandler } from 'express';
import { UserModel } from '../../schemas/UserSchema';
import { ValidationResult, isObjectValid } from './../../helpers/isObjectValid';
import { getHashedPassword } from '../../helpers/auth';
import { MongooseError } from 'mongoose';
import { UserDto } from './dtos/user.dto';

const registerUser = async (req: Request, res: Response) => {
	try {
		const userDto = new UserDto();
		const validationResult = isObjectValid(userDto, req.body);
		if (!validationResult.isValid) {
			return res.status(400).json({
				errorMessage: validationResult.text,
			});
		}

		const newUser = new UserModel();
		const hashedPassword = await getHashedPassword(req.body.password);

		if (typeof hashedPassword !== 'string') {
			return res
				.status(500)
				.json({ errorMessage: 'Hashing password error. Try again.' });
		}

		Object.assign(newUser, { email: req.body.email, password: hashedPassword });
		await newUser
			.save()
			.then((user) => res.status(200).json(user._id))
			.catch((e: MongooseError) => {
				if (e.message.includes('E11000')) {
					return res
						.status(409)
						.json({ errorMessage: 'User with this email already exists' });
				} else {
					return res.status(422).json({ errorMessage: 'Validation error - ' });
				}
			});
	} catch (e) {
		console.log(e);
		return res.status(500).json({ errorMessage: 'RegisterUser error' });
	}
};

export default registerUser;
