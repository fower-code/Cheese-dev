import {
	EventEmitterOpts,
	Handler,
	HandlerStore,
} from "~core/event/interfaces";

export { default as streamEvent } from "./stream";

/**
 * @description Класс для работы с событиями.
 */
export default class EventEmitter<T> {
	// readonly #handlers: HandlerStore<T>;
	protected _captures: HandlerStore<T>;
	protected _bubbles: HandlerStore<T>;
	protected parent: Nullable<EventEmitter<T>>;

	get captures(): HandlerStore<T> {
		return this._captures;
	}

	get bubbles(): HandlerStore<T> {
		return this._bubbles;
	}

	constructor(opts?: EventEmitterOpts, parent?: EventEmitter<T>) {
		// this.#handlers = new Map();
		this._captures = new Map();
		this._bubbles = new Map();
		this.parent = parent ?? null;

		this.on.prototype.capture = (evName: string, handler: Handler<T>) => {
			this._on(evName, handler, this._captures);
		};
	}

	protected _on(evName: string, handler: Handler<T>, store: HandlerStore<T>) {}

	private hasKey(event: string, store: HandlerStore<T>) {
		return store.has(event);
	}

	public clear(store: HandlerStore<T>) {
		store.clear();
	}

	public once(event: string, cb: (v: T) => unknown) {
		// const handlers = this.#handlers.get(event);
		//
		// const cbWrap = (v: T) => {
		// 	cb(v);
		//
		// 	if (handlers) {
		// 		handlers.delete(cbWrap);
		// 	} else {
		// 		this.#handlers.delete(event);
		// 	}
		// };
		//
		// if (handlers) {
		// 	handlers.add(cbWrap);
		// } else {
		// 	this.#handlers.set(event, new Set([cbWrap]));
		// }
	}

	public on(event: string, cb: (v: T) => unknown) {
		// const handlers = this.#handlers.get(event);
		//
		// if (handlers) {
		// 	handlers.add(cb);
		// } else {
		// 	this.#handlers.set(event, new Set([cb]));
		// }
	}

	public off(event: string, cb?: (v: unknown) => unknown) {
		// if (!cb) {
		// 	this.#handlers.delete(event);
		// 	return;
		// }
		//
		// const handlers = this.#handlers.get(event);
		//
		// if (handlers) {
		// 	handlers.delete(cb);
		// }
	}

	public emit(event: string, val: T) {
		// const handlers = this.#handlers.get(event);
		//
		// if (handlers) {
		// 	for (const handler of handlers) {
		// 		handler(val);
		// 	}
		// }
	}
}
