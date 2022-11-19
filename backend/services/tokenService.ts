import JWT, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../utils/config";
import HttpException from "../utils/httpException";

export interface UserPayload extends JwtPayload {
	_id: string;
	username: string;
	email: string;
	isAdmin: boolean
}

export function generateToken(user: UserPayload) {		
	return JWT.sign(user, JWT_SECRET, { expiresIn: '1d'})
}

export function verifyToken(token: string): UserPayload {
	try {
		return JWT.verify(token, JWT_SECRET) as UserPayload
	} catch (error) {
		throw new HttpException('Invalid token', 401)
		
	}
}