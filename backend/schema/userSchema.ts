import { UserType } from "../types/userTypes"
import { Schema } from "mongoose";

export const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export interface IUserSchema extends UserType {
	_id: string;
}

const userSchema = new Schema<UserType>({
	username: { type: String, required: [true, 'Username is required' ], unique: true },
	email: { type: String, required: [true, 'Email is required' ], unique: true, min: [6, 'Email must be at least 6 characters' ], max: [50, 'Email must be less than 50 characters' ],
	match: [emailRegEx, 'Please add a valid email']
 },
	password: { type: String, required: [true, 'Password is required' ], min: [6, 'Email must be at least 6 characters' ], max: [50, 'Email must be less than 50 characters' ] },
	isAdmin: { type: Boolean, default: false },
	isSuperAdmin: { type: Boolean, default: false },
	resetPasswordToken: String,
	resetPasswordExpires: Date
}, { timestamps: true })


export default userSchema