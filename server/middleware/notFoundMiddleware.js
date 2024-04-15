import HTTP_STATUS from '../data/httpStatus.js';

const notFoundMiddleware = (req, res) => {
	const statusCode = HTTP_STATUS.NOT_FOUND;

	res.status(statusCode);
	res.json({
		message: 'Route does not exist',
	});
};

export default notFoundMiddleware;
