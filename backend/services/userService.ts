import { checkIsValidObjectId } from "../database/db"
import UserModel from "../models/userModel"
import { sanitizeLoginUser, sanitizeUser } from "../sanitizers/userSanitizer"
import { IUserSchema } from "../schema/userSchema"
import { UserReturnType, UserType } from "../types/userTypes"
import bcrypt from 'bcryptjs'
import HttpException from "../utils/httpException"
import { generateToken } from "./tokenService"

export async function getUsers(): Promise<UserType[]> {
	try {
		const users = await UserModel.find()
		if(!users) throw new HttpException('Users not found', 404)

		return users
	} catch (error) {
		throw new HttpException(`Failed to find users ${error}`, 400)
	}
}

export async function loginUser(email: string, password: string): Promise<UserReturnType> {
	const sanitizedUser = await sanitizeLoginUser(email, password)
	try {
		const user = await UserModel.findOne({ email: sanitizedUser.email })
		if (!user) throw new HttpException('User not found', 404)

		const isValidPassword = await bcrypt.compare(password, user.password)
		if (!isValidPassword) throw new HttpException('Password is invalid', 400)

		const token = generateToken({ _id: user._id, username: user.username, email: user.email, isAdmin: user.isAdmin })
		
		
		return {_id: user._id, username: user.username, email: user.email, isAdmin: user.isAdmin, token }
	} catch (error) {
		throw new HttpException(`Failed to login user: ${error.message}`, 400)
	}
}

export async function createUser(user: UserType): Promise<UserReturnType> {
	const sanitizedUser = await sanitizeUser(user)

	try {

		
		const newUser = await UserModel.create(sanitizedUser)
		if (!newUser) throw new HttpException('User not created', 400)
     console.log(newUser);
		 const { _id, username, email, isAdmin } = newUser
		const token = generateToken({ _id, username, email, isAdmin })
		
		
		return {_id, username, email, isAdmin, token }
	} catch (error) {
		throw new HttpException(`Failed to create user ${error}`, 400)
	}
	
}


export async function getUserById (userId: string): Promise<IUserSchema> {
	checkIsValidObjectId(userId)
	try {
		const user = await UserModel.findById(userId)
		if (!user) throw new HttpException('User not found', 404)
	
		return user
	} catch (error) {
		throw new HttpException(`Failed to find user ${error}`, 400)
	}
}


export async function updateUser(userId: string, user: UserType) {
	checkIsValidObjectId(userId)

	
	const sanitizedUser = sanitizeUser(user)
	try {
		const updatedUser = await UserModel.findByIdAndUpdate(userId, sanitizedUser, { new: true })
		
		if (!updatedUser) throw new HttpException('User not found', 404)
		
	return updatedUser
	} catch (error) {
		throw new HttpException(`Failed to update user ${error}`, 400)
	}
}


export async function deleteUser(userId: string): Promise<void> {
	checkIsValidObjectId(userId)
	try {
		const user = await UserModel.findByIdAndDelete(userId)
		if (!user) throw new HttpException('User not found', 404)
	
		return;
	} catch (error) {
		throw new HttpException(`Failed to delete user ${error}`, 400)
	}
} 