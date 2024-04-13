/* eslint-disable @typescript-eslint/no-var-requires */
// This file is used to connect to MongoDB
const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/');
		console.log(`MongoDB Connected ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
