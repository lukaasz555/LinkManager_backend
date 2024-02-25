import { Request, Response, NextFunction } from 'express';

export const idMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (!req.params.id) {
		return res.status(400).json({
			errorMessage: 'Missing params: ID',
		});
	}

	if (isNaN(Number(req.params.id))) {
		return res.status(400).json({
			errorMessage: 'ID must be a number',
		});
	}

	res.locals.itemId = Number(req.params.id);
	next();
};
