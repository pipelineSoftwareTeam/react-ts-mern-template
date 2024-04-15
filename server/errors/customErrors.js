import HTTP_STATUS from '../data/httpStatus.js';

// Custom Error API
class CustomError extends Error {
	constructor(message) {
		super(message);
	}
}

// Bad request error
class BadRequestError extends CustomError {
	constructor(message) {
		super(message);
		this.statusCode = HTTP_STATUS.BAD;
	}
}

// Not found error
class NotFoundError extends CustomError {
	constructor(message) {
		super(message);
		this.statusCode = HTTP_STATUS.NOT_FOUND;
	}
}

// Unauthenticated error
class UnauthenticatedError extends CustomError {
	constructor(message) {
		super(message);
		this.statusCode = HTTP_STATUS.UNAUTHORIZED;
	}
}

export { CustomError, BadRequestError, NotFoundError, UnauthenticatedError };
