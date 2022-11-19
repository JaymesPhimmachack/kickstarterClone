import { UserPayload } from "../services/tokenService";

export interface UserType {
	username: string;
	email: string;
	password: string;
	isAdmin: boolean;
	isSuperAdmin: boolean;
	resetPasswordToken: string;
	resetPasswordExpires: Date;
}

export interface UserReturnType extends UserPayload {
 token: string;
}