export default class EventEmitter {
	#handlers: Map<string, Function[]>;

	get handlers() {
		return this.#handlers;
	}

	constructor() {
		this.#handlers = new Map();
	}

	private hasKey(event: string) {
		return this.#handlers.has(event);
	}

	public clearHandlers(event: Event): void {

	}

	public once(event: string, cb: (v: unknown) => unknown) {

	}

	public on(event: string, cb: (v: unknown) => unknown) {
		const
			handlers = this.#handlers.get(event);

		if (handlers) {
			handlers.push(cb);
			this.handlers.set(event, handlers);

		} else {
			this.handlers.set(event, [cb]);
		}
	}

	public off(event: string, cb?: (v: unknown) => unknown) {
		const
			handlers = this.#handlers.get(event);
	}

	public emit(key: string, val: unknown) {

	}
};
