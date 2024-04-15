import HTTP_STATUS from '../data/httpStatus.ts';

// Type imports
import { Request, Response, RequestHandler } from 'express';

const notFoundMiddleware: RequestHandler = (req: Request, res: Response) => {
	const statusCode: number = HTTP_STATUS.NOT_FOUND;

	res.status(statusCode);
	res.json({
		message: 'Route does not exist',
	});
};

export default notFoundMiddleware;
