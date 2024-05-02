export interface EventEmitterOpts {
	error: boolean;
}

export type Handler<T> = (v: T) => unknown;
