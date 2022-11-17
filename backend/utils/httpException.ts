export default class HttpException extends Error {
	status?: number;
	message: string;
	error: string | null;

	constructor(message: string, status: number, error?: string | null) {
		super(message)
		this.message = message
		this.status = status
		this.error = error || null
	}
}