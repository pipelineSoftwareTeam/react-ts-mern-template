import HTTP_STATUS from '../data/httpStatus';

const errorMessage = {
	statusCode: HTTP_STATUS.BAD,
	message: 'Unexpected error. Please try again.',
};

const setDefaultError = (err: any) => {
	(errorMessage.statusCode =
		err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR),
		(errorMessage.message =
			`${err.message}` || 'Something went wrong, please try again later.');
};

const setValidationError = (err: any) => {
	errorMessage.statusCode = HTTP_STATUS.BAD;
	errorMessage.message = `${Object.values(err.errors)
		.map((item: any) => item.message)
		.join(', ')}`;
};

const setDuplicateError = (err: any) => {
	errorMessage.statusCode = HTTP_STATUS.BAD;
	errorMessage.message = `${err.keyValue.email} already exists. Please login.`;
};

export { errorMessage, setDefaultError, setValidationError, setDuplicateError };
