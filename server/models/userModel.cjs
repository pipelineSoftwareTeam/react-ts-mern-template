/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');
const { requiredString } = require('./modelTypes.cjs');

const { Schema } = mongoose;

const userData = {
	fName: requiredString,
	lName: requiredString,
	email: requiredString,
	password: requiredString,
};

// Create new database schema using mongoose.Schema //
const userSchema = new Schema(userData, {
	timestamps: true,
});

// Create mongoose model from creating Schema //
// Given name in first argument is always singular //
const userSchemaModel = mongoose.model('User', userSchema);

module.exports = userSchemaModel;
