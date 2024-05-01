export default class EventEmitter {
	// todo callback type
	readonly #handlers: Map<string, Set<Function>>;

	get handlers() {
		return this.#handlers;
	}

	static stream(el: EventEmitter, event: string, handler: (v: unknown) => unknown){
		let
			cb;

		el.on(event, handler);

		// el.addEventListener(event, (ev) => {
		// 	console.log(2);
		// 	handler(ev);
		// });

		return {
			[Symbol.iterator]() {
				return this;
			},

			next() {
				// return Promise.resolve({
				// 	done: false,
				// 	value: new Promise((resolve) => {
				// 		// cb = resolve
				// 		handler = resolve
				// 	})
				// });

				// return new Promise((resolve) => {
				// 	resolve({
				// 		done: false,
				// 		value:
				// 			// cb = resolve
				// 			handler = resolve
				// 		})
				// 	});
				// });

				return {
					done: false,
					value: new Promise((resolve) => {
						// cb = resolve
						handler = resolve
					})
				};
			}
		}
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
		const
			handlers = this.#handlers.get(event);

		const cbWrap = (v: unknown) => {
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
