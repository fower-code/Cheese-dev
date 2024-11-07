import type { LoggerEngine } from "~core/logger/engines";

export type { LoggerEngine } from "~core/logger/engines";

export interface LoggerOpts {
	engine?: LoggerEngine;
}
