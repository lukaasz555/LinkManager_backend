import { Request, Response, ErrorRequestHandler } from 'express';
import { UserModel } from '../../schemas/UserSchema';
import { ValidationResult, isObjectValid } from './../../helpers/isObjectValid';
import { getHashedPassword } from '../../helpers/auth';
import { MongooseError } from 'mongoose';

const testAuth = async (req: Request, res: Response) => {
	console.log('testAuth');
	try {
		console.log('testAuth');
		const isRes: boolean = await new Promise((resolve) => {
			return resolve(true);
		});
		if (isRes) {
			console.log('isRes is ok');
		}

		return res.status(200).json({ message: 'testAuth' });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ errorMessage: 'TestAuth error' });
	}
};

export default testAuth;
