import express, { Request, Response } from 'express';

export const testRouter = express.Router();

const testGet = (req: Request, res: Response) => {
	return res.status(200).json({
		status: 200,
		message: 'Test success',
	});
};

testRouter.route('/').get(testGet);
