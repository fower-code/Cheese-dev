import { Handler } from "~core/event/interfaces";

export { default as streamEvent } from "./stream";

/**
 * @description Класс для работы с событиями.
 */
export default class EventEmitter<T> {
	// todo callback type
	readonly #handlers: Map<string, Set<Handler<T>>>;

	get handlers() {
		return this.#handlers;
	}

	constructor() {
		this.#handlers = new Map();
	}

	private hasKey(event: string) {
		return this.#handlers.has(event);
	}

	public clear() {
		this.#handlers.clear();
	}

	public once(event: string, cb: (v: T) => unknown) {
		const handlers = this.#handlers.get(event);

		const cbWrap = (v: T) => {
			cb(v);

			if (handlers) {
				handlers.delete(cbWrap);
			} else {
				this.#handlers.delete(event);
			}
		};

		if (handlers) {
			handlers.add(cbWrap);
		} else {
			this.#handlers.set(event, new Set([cbWrap]));
		}
	}

	public on(event: string, cb: (v: T) => unknown) {
		const handlers = this.#handlers.get(event);

		if (handlers) {
			handlers.add(cb);
		} else {
			this.#handlers.set(event, new Set([cb]));
		}
	}

	public off(event: string, cb?: (v: unknown) => unknown) {
		if (!cb) {
			this.#handlers.delete(event);
			return;
		}

		const handlers = this.#handlers.get(event);

		if (handlers) {
			handlers.delete(cb);
		}
	}

	public emit(event: string, val: T) {
		const handlers = this.#handlers.get(event);

		if (handlers) {
			for (const handler of handlers) {
				handler(val);
			}
		}
	}
}
