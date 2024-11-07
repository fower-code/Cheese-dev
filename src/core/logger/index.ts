import DefaultEngine, {LoggerEngine} from "~core/logger/engines";
import type {LoggerOpts} from "~core/logger/interface";

export {LoggerOpts, LoggerEngine} from "~core/logger/interface";
export {default as ConsoleEngine} from "~core/logger/engines/console";

export default class Logger {
	public namespace: string;

	#engine: LoggerEngine;

	constructor(namespace: string, loggerOpts?: LoggerOpts) {
		this.namespace = namespace;
		this.#engine = loggerOpts?.engine ?? new DefaultEngine();
	}

	public log(msg: string, ...args: unknown[]) {
		this.#engine.log(msg, ...args);
	}

	public warn(msg: string, ...args: unknown[]) {
		this.#engine.warn(msg, ...args);
	}

	public error(err: string | Error, ...args: unknown[]) {
		this.#engine.error(err, ...args);
	}

}
