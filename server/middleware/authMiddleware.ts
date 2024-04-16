import asyncHandler from 'express-async-handler';
import HTTP_STATUS from '../data/httpStatus';

// Type imports
import { Response, RequestHandler } from 'express';
// import { AuthRequest } from '../types/index';

// Helper Functions
import { verifyToken } from '../utils/tokenUtils';

// Error handlers
import { UnauthenticatedError } from '../errors/customErrors';

const sendNoAuth = (response: Response, msg: string) => {
	response.status(HTTP_STATUS.UNAUTHORIZED);
	throw new UnauthenticatedError(msg);
};

const protectRoute: RequestHandler = asyncHandler(
	async (req, res, next) => {
		const authHeader = req.headers.authorization;
		if (!authHeader) {
			sendNoAuth(res, 'Authentication failed');
		}

		if (authHeader && authHeader.startsWith('Bearer')) {
			try {
				const token = authHeader.split(' ')[1];
				const decoded = verifyToken(token);
				req.user = {id: decoded.id}
				next();
			} catch (err) {
				sendNoAuth(res, 'Authentication failed');
			}
		} else {
			sendNoAuth(res, 'Not authorized, please try again or login.');
		}
	}
);

export default protectRoute;
