export default class Iter<T> {
	readonly #iter: Iterable<T>

	// #sIter: () => Iterator<T>

	constructor(iter: Iterable<T>) {
		this.#iter = iter;
		// this.#sIter = iter[Symbol.iterator]
	}

	[Symbol.iterator](): Iterator<T> {
		const
			iter = this.#iter[Symbol.iterator]();

		return {
			next(): IteratorResult<T> {
				return iter.next();
			}
		};
	}

	public map(fn: (v: T) => T) {
		const
			iter = this.#iter[Symbol.iterator]();

		const newIter: Iterator<T> = {
			next(): IteratorResult<T> {
				const res = iter.next();

				if (!res.done) {
					return {
						value: fn(res.value),
						done: false,
					};
				}

				return res;
			},
		};

		this.#iter[Symbol.iterator] = () => newIter;
		return this;
	}

	public filter(fn: (v: T) => boolean) {
		const
			iter = this.#iter[Symbol.iterator]();

		const newIter: Iterator<T> = {
			next(): IteratorResult<T> {
				let res = iter.next();
				let isConditions = fn(res.value);

				while (!res.done && !isConditions) {
					res = iter.next();
					isConditions = fn(res.value);
				}

				return res;
			}
		};

		this.#iter[Symbol.iterator] = () => newIter;
		return this;
	}

	public enumerate<TReturn = [number, T]>() {
		const
			iter: Iterator<T> = this.#iter[Symbol.iterator]();

		let
			countIter = 1;

		const newIter: IterableIterator<TReturn> = {
			next(): IteratorResult<TReturn> {
				let res = iter.next();
				let isConditions = res.value

				if (!res.done) {
					return {
						value: [countIter++, res.value],
						done: false,
					};
				}

				return res;
			},

			[Symbol.iterator]() {
				return this;
			}
		};

		// this.#iter[Symbol.iterator] = () => newIter;
		// return this;
		const nI = [...newIter];
		// return new Iter<TReturn>(newIter);
	}
}

