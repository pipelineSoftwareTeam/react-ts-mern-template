import asyncHandler from 'express-async-handler';
import HTTP_STATUS from '../data/httpStatus.js';

import { verifyToken } from '../utils/tokenUtils.js';

// Error handlers
import { UnauthenticatedError } from '../errors/customErrors.js';

const sendNoAuth = (response, msg) => {
	response.status(HTTP_STATUS.UNAUTHORIZED);
	throw new UnauthenticatedError(msg);
};

const protectRoute = asyncHandler(async (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		sendNoAuth(res, 'Authentication failed');
	}

	if (authHeader && authHeader.startsWith('Bearer')) {
		try {
			const token = authHeader.split(' ')[1];
			const decoded = verifyToken(token, process.env.JWT_SECRET);
			req.user = { _id: decoded.id };
			next();
		} catch (err) {
			sendNoAuth(res, 'Authentication failed');
		}
	} else {
		sendNoAuth(res, 'Not authorized, please try again or login.');
	}
});

export default protectRoute;
