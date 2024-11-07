export interface LoggerEngine {
	log(msg: string, ...args: unknown[]): void;

	warn(msg: string, ...args: unknown[]): void;

	error(err: string | Error, ...args: unknown[]): void;
}
