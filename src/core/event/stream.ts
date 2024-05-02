import EventEmitter from "~core/event/index";
import {Handler} from "~core/event/interfaces";

export default function streamEvent<T>(ee: EventEmitter<T>, event: string): AsyncIterableIterator<T> {
	const resolvers: Set<Handler<T>> = new Set();

	// todo Переделать, когда будет модуль очереди
	const queue: T[] = [];

	ee.on(event, handler);

	return {
		[Symbol.asyncIterator]() {
			return this;
		},

		next() {
			return new Promise((r) => {
				const
					e: T | undefined = queue.shift();

				if (e) {
					r({
						done: false,
						value: e
					});

				} else {
					resolvers.add((v) => r({
						done: false,
						value: v
					}));
				}
			});
		}
	};

	function handler(e: T) {
		if (resolvers.size > 0) {
			try {
				resolvers.forEach((r) => r(e));

			} finally {
				resolvers.clear();
			}

		} else {
			queue.push(e);
		}
	}
};
