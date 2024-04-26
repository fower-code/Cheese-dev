export default class EventEmitter {
	// readonly #handlers: Map<string, Function[]>;

	readonly #handlers: Map<string, Set<Function>>;

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

	public once(event: string, cb: (v: unknown) => unknown) {

	}

	public on(event: string, cb: (v: unknown) => unknown) {
		const
			handlers = this.#handlers.get(event);

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

		const
			handlers = this.#handlers.get(event);

		if (handlers) {
			handlers.delete(cb);
		}
	}

	public emit(event: string, val: unknown) {
		const
			handlers = this.#handlers.get(event);

		if (handlers) {
			for (const handler of handlers) {
				handler(val);
			}
		}
	}
};
