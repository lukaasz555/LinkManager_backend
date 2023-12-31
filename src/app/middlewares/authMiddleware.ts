import { Request, Response, NextFunction } from 'express';

export function authMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	console.log(`authMiddleware: ${req.method} URL: ${req.url}`);
	next();
}
