import express, { Request, Response } from 'express';

export const testRouter = express.Router();

const testGet = (req: Request, res: Response) => {
	return res.status(200).json({
		status: 200,
		message: 'api/v1 test success',
	});
};

testRouter.route('/').get(testGet);
