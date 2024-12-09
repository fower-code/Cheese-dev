export interface EventEmitterOpts {
	error: boolean;
}

export type Handler<T> = (v: T) => unknown;

export type HandlerStore<T> = Map<string, Set<Handler<T>>>;
