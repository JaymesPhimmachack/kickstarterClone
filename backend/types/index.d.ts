import { IUserSchema } from "../schema/userSchema"

export {}

declare global {
	namespace Express {
		interface Request {
			user: IUserSchema
		}
	}
}