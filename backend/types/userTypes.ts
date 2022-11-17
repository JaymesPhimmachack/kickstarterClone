export interface UserType {
	username: string;
	email: string;
	password: string;
	isAdmin: boolean;
	isSuperAdmin: boolean;
	resetPasswordToken: string;
	resetPasswordExpires: Date;
}