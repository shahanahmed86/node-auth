import { RedisOptions } from 'ioredis';

const {
	REDIS_PORT = 6379,
	REDIS_HOST: host = 'localhost',
	REDIS_PASSWORD: password = 'secret'
} = process.env;

export const REDIS_OPTIONS: RedisOptions = { host, port: +REDIS_PORT, password };
