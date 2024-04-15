"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Package imports
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// import dotenv from 'dotenv';
// import morgan from 'morgan';
// // Database
// import connectDB from './connect/db.js';
// // Routes
// import endpoint from './data/endpoints.js';
// import authRoutes from './routes/authRoutes.js';
// // Middleware
// import notFoundMiddleware from './middleware/notFoundMiddleware.js';
// import errorMiddleware from './middleware/errorMiddleware.js';
// import protectRoute from './middleware/authMiddleware.js';
// dotenv.config();
// connectDB();
const app = (0, express_1.default)();
// Log response status codes in the console during development
// if (process.env.NODE_ENV !== 'production') {
// 	app.use(morgan('dev'));
// }
// Parse incoming requests as JSON
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;
app.get('/api/test', (req, res) => {
    res.json({ message: 'Proxy enabled' });
});
// // Any time these routes are hit, route file is called
// app.use(endpoint.auth, authRoutes);
// // Looking for route not matched errors
// app.use(notFoundMiddleware);
// // Looking for errors inside existing route
// app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}!`);
});
