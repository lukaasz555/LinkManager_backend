import { Request, Response, NextFunction } from 'express';

export function cacheMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const periodInSeconds = 60 * 5;
	if (req.method === 'GET') {
		res.set('Cache-control', `private, max-age=${periodInSeconds}`);
	} else {
		res.set('Cache-control', 'no-store');
	}
	next();
}
