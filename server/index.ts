// Package imports
import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';

// Database
import connectDB from './connect/db';

// Routes
import endpoint from './data/endpoints';
import authRoutes from './routes/authRoutes';

// Middleware
import notFoundMiddleware from './middleware/notFoundMiddleware';
import errorMiddleware from './middleware/errorMiddleware';
import protectRoute from './middleware/authMiddleware';

dotenv.config();

connectDB();

const app: Express = express();

// Log response status codes in the console during development
if (process.env.NODE_ENV !== 'production') {
	app.use(morgan('dev'));
}

// Parse incoming requests as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port: string | number = process.env.PORT || 5000;

app.get('/api/test', (req: Request, res: Response) => {
	res.json({ message: 'Proxy enabled' });
});

// Any time these routes are hit, route file is called
app.use(endpoint.auth, authRoutes);

// Looking for route not matched errors
app.use(notFoundMiddleware);

// Looking for errors inside existing route
app.use(errorMiddleware);

app.listen(port, () => {
	console.log(`Server is listening on port: ${colors.bgMagenta(port.toString())}`);
});
