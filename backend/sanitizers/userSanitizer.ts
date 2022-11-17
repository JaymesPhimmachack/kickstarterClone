import { emailRegEx } from "../schema/userSchema";
import { UserType } from "../types/userTypes";
import HttpException from "../utils/httpException";

export function sanitizeUser(user: UserType): UserType {
	let sanitizeUser= <UserType>{}
	sanitizeUser.username = sanitizeUsername(user.username)
	sanitizeUser.email = sanitizeEmail(user.email)
	sanitizeUser.isAdmin = sanitizeIsAdmin(user.isAdmin)
	sanitizeUser.password = user.password

	return sanitizeUser
}

function sanitizeUsername(username: string): string {
	if (username === undefined) throw new HttpException('Username is undefined', 400)

	if (typeof username !== 'string') throw new HttpException('Username is not string', 400)

	username = username.trim()

	return username
}

function sanitizeEmail(email: string): string {
	if (email === undefined) throw new HttpException('Email is undefined', 400)

	if (typeof email !== 'string') throw new HttpException('Email is not string', 400)

	email = email.trim()

	if (email.length < 6) throw new HttpException('Email must be at least 6 characters', 400)

	if (email.length > 50) throw new HttpException('Email must be less than 50 characters', 400)

	if (!email.match(emailRegEx)) throw new HttpException('Please add a valid email', 400)

	return email
}


function sanitizeIsAdmin(isAdmin: boolean): boolean {
	if (!isAdmin) isAdmin = false

	return isAdmin
}