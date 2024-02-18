import { isObjectValid } from './isObjectValid';
import { Response } from 'express';

export const requestValidator = <T>(
	dto: T,
	request: Record<string, unknown>,
	response: Response
) => {
	const validationResult = isObjectValid(dto, request);
	if (!validationResult.isValid) {
		return response.status(400).json({
			errorMessage: validationResult.text,
		});
	}
};
