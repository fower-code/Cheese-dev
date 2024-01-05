import {LoggerEngine} from "@core/logger/engines/interface";

export default class ConsoleEngine implements LoggerEngine {
	#getStyleConfig() {
		// todo
	}

	constructor() {

	}

	public log(msg: string, ...args: unknown[]) {
		console.log(msg, ...args);
	}

	public warn(msg: string, ...args: unknown[]) {
		console.warn(msg, ...args);
	}

	public error(err: string | Error, ...args: unknown[]) {
		console.error(err, ...args);
	}
}
