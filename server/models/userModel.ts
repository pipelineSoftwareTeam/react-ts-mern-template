// Mongoose import
import mongoose, { Schema, InferSchemaType } from 'mongoose';

// Data types import
import {
	requiredNameString,
	requiredEmailString,
	requiredPasswordString,
} from './dataTypes.ts';

// User model
const userModel = {
	name: requiredNameString,
	email: requiredEmailString,
	password: requiredPasswordString,
};

// Create new schema
const userSchema = new Schema(userModel, { timestamps: true });
type User = InferSchemaType<typeof userSchema>;

// Create mongoose model
const userSchemaModel = mongoose.model('User', userSchema);

export default userSchemaModel;
