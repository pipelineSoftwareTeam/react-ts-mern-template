import HTTP_STATUS from '../data/httpStatus.js';
import {
	errorMessage,
	setDefaultError,
	setValidationError,
	setDuplicateError,
} from './errorMessages.js';

const errorMiddleware = (err, req, res, next) => {
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
