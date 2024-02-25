import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export function userMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { userid } = req.headers;
	const token =
		req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

	if (!userid) {
		return res
			.status(400)
			.json({ errorMessage: 'UserId is missing in headers' });
	}

	if (!token) {
		return res
			.status(401)
			.json({ errorMessage: 'Access token is missing in headers' });
	}

	if (!process.env.TOKEN_SECRET) {
		throw Error('userMiddleware: No TOKEN_SECRET provided');
	}
	const tokenSecret = process.env.TOKEN_SECRET as string;

	jwt.verify(token, tokenSecret, (err) => {
		if (err) {
			return res.status(401).json({ errorMessage: 'Invalid token' });
		} else {
			res.locals.token = token;
			res.locals.userId = userid;
			next();
		}
	});
}
