import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../services/tokenService";
import { getUserById } from "../services/userService";
import { UserType } from "../types/userTypes";
import HttpException from "../utils/httpException";


export const protect = async (req: Request, res: Response, next: NextFunction) => {
	const headers = req.headers?.authorization?.startsWith('Bearer ')
	if (!headers) {
		throw new HttpException('Unauthorized request', 401)
	}

	const token = req.headers.authorization?.split(' ')[1]!

	const decodedToken = verifyToken(token)
	req.user = await getUserById(decodedToken._id)
	next()
}