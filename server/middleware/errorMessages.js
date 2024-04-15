import HTTP_STATUS from '../data/httpStatus.js';

const errorMessage = {
	statusCode: HTTP_STATUS.BAD,
	message: 'Unexpected error. Please try again.',
};

const setDefaultError = (err) => {
	(errorMessage.statusCode =
		err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR),
		(errorMessage.message =
			`${err.message}` || 'Something went wrong, please try again later.');
};

const setValidationError = (err) => {
	errorMessage.statusCode = HTTP_STATUS.BAD;
	errorMessage.message = `${Object.values(err.errors)
		.map((item) => item.message)
		.join(', ')}`;
};

const setDuplicateError = (err) => {
	errorMessage.statusCode = HTTP_STATUS.BAD;
	errorMessage.message = `${err.keyValue.email} already exists. Please login.`;
};

export { errorMessage, setDefaultError, setValidationError, setDuplicateError };
