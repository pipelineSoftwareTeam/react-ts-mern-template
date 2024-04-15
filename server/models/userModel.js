// Mongoose import
import mongoose, { Schema } from 'mongoose';

// Data types import
import {
	requiredNameString,
	requiredEmailString,
	requiredPasswordString,
} from './dataTypes.js';

// User model
const userModel = {
	name: requiredNameString,
	email: requiredEmailString,
	password: requiredPasswordString,
};

// Create new schema
const userSchema = new Schema(userModel, { timestamps: true });

// Create mongoose model
const userSchemaModel = mongoose.model('User', userSchema);

export default userSchemaModel;
