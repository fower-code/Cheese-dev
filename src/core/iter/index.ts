export { asyncForeach } from "~core/iter/async";
export { iterInterval } from "~core/iter/async";

export function map<T, U>(
	iterable: Iterable<T>,
	callback: (value: T, index?: number, iterable?: Iterable<T>) => U,
	thisArg?: unknown,
) {
	const iter = iterable[Symbol.iterator]();

	let i = 0;

	return {
		[Symbol.iterator]() {
			return this;
		},

		next() {
			const res = iter.next();

			if (!res.done) {
				return {
					value: callback.call(thisArg, res.value, i++, iterable),
					done: res.done,
				};
			}

			return res;
		},
	};
}

export function filter<T>(
	iterable: Iterable<T>,
	predicate: (value: T, index?: number, iterable?: Iterable<T>) => boolean,
	thisArg?: unknown,
) {
	const iter = iterable[Symbol.iterator]();

	let i = 0;

	return {
		[Symbol.iterator]() {
			return this;
		},

		next() {
			let res = iter.next(),
				isCondition = predicate.call(thisArg, res.value, i++, iterable);

			while (!res.done && !isCondition) {
				res = iter.next();
				isCondition = predicate.call(thisArg, res.value, i++, iterable);
			}

			return res;
		},
	};
}

export function enumerate<T>(iterable: Iterable<T>) {
	const iter = iterable[Symbol.iterator]();

	let count = 1;

	return {
		[Symbol.iterator]() {
			return this;
		},

		next() {
			const res = iter.next();

			if (!res.done) {
				return {
					value: [count++, res.value],
					done: res.done,
				};
			}

			return res;
		},
	};
}

export function take<T>(iterable: Iterable<T>, count: number) {
	const iter = iterable[Symbol.iterator]();

	let i = 0;

	return {
		[Symbol.iterator]() {
			return this;
		},

		next() {
			const res = iter.next();

			if (!res.done && i++ < count) {
				return {
					value: res.value,
					done: res.done,
				};
			}

			return {
				value: null,
				done: true,
			};
		},
	};
}

export function repeat<T>(iterable: Iterable<T>, count: number) {
	if (count === 0) {
		return {
			[Symbol.iterator]() {
				return this;
			},

			next() {
				return {
					value: null,
					done: true,
				};
			},
		};
	}

	let iter = iterable[Symbol.iterator]();

	let i = 1;

	return {
		[Symbol.iterator]() {
			return this;
		},

		next() {
			let res = iter.next();

			if (res.done && i >= count) {
				return {
					value: null,
					done: true,
				};
			}

			if (res.done) {
				i++;
				iter = iterable[Symbol.iterator]();
				res = iter.next();
			}

			return {
				value: res.value,
				done: false,
			};
		},
	};
}
