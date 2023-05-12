/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware.cjs');
const connectDB = require('./config/db.cjs');
const userRoutes = require('./routes/userRoutes.cjs');

// Calling our custom imported function module //
connectDB();

const app = express();

app.use(express.json());

const corsOptions = {
	origin: process.env.CORS_ORIGIN,
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

const port = process.env.PORT || 5000;
const userEndpoint = '/api/users';

// Parse incoming Request as strings or arrays //
// with application/x-www-form-urlencoded, basically can only //
// parse incoming Request Object if it is strings or arrays //
app.use(express.urlencoded({ extended: false }));

// When the filepath is hit, JS will jump into the require //
// as a callback function and jump into the specified file //

// userRoutes will handle all requests to the userEndpoint path //
// app.use() mounts the path inside userEndpoint to userRoutes //
app.use(userEndpoint, userRoutes);

// Custom function will overwrite default express error handler //
app.use(errorHandler);

// File is listening on specified port, socket is created //
// and bound to specified port with an IP address //
app.listen(port, () => console.log(`Server started on port ${port}`));
