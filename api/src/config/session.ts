import { SessionOptions } from 'express-session';
import { IN_PROD } from './';

const HALF_HOUR = 1000 * 60 * 30;

const {
	SESSION_SECRET: secret = `please keep this secret, mate`,
	SESSION_NAME: name = `sid`,
	SESSION_IDLE_TIMEOUT = HALF_HOUR
} = process.env;

export const SESSION_OPTIONS: SessionOptions = {
	secret,
	name,
	cookie: {
		maxAge: +SESSION_IDLE_TIMEOUT,
		secure: IN_PROD,
		sameSite: true
	},
	rolling: true,
	resave: false,
	saveUninitialized: false
};
