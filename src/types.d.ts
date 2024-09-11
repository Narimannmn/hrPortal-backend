import { Payload } from 'payload'

declare global {
	namespace Express {
		interface Request {
			payload?: Payload
		}
	}
}
