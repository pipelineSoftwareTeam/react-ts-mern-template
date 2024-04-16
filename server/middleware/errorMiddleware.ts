import HTTP_STATUS from '../data/httpStatus';
import {
	errorMessage,
	setDefaultError,
	setValidationError,
	setDuplicateError,
} from './errorMessages';

// Type imports
import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	setDefaultError(err);

	if (err.name === 'ValidationError') {
		setValidationError(err);
	}

	if (err.code && err.code === 11000) {
		setDuplicateError(err);
	}

	res.status(errorMessage.statusCode);
	res.json({ message: errorMessage.message });
	// full_msg: err,
};

export default errorMiddleware;
