export default class Iter<T> {
	readonly #iter: Iterable<T>

	constructor(iter: Iterable<T>) {
		this.#iter = iter;
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

		const newIter: IterableIterator<T> = {
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

			[Symbol.iterator]() {
				return this;
			}
		};

		this.#iter[Symbol.iterator] = () => newIter;
		return this;
	}

	public filter(fn: (v: T) => boolean) {
		const
			iter = this.#iter[Symbol.iterator]();

		const newIter: IterableIterator<T> = {
			next(): IteratorResult<T> {
				let res = iter.next();
				let isConditions = fn(res.value);

				while (!res.done && !isConditions) {
					res = iter.next();
					isConditions = fn(res.value);
				}

				return res;
			},

			[Symbol.iterator]() {
				return this;
			}
		};

		this.#iter[Symbol.iterator] = () => newIter;
		return this;
	}

	public enumerate() {
		const
			iter = this.#iter[Symbol.iterator]();

		let
			countIter = 1;

		const newIter: IterableIterator<[number, T]> = {
			next():IteratorResult<[number, T]> {
				let res = iter.next();

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

		return new Iter([...newIter]);
	}

	public take(count:number) {
		const
			iter = this.#iter[Symbol.iterator]();

		let i = 0;

		const newIter:IterableIterator<T> ={
			next() {
				let res = iter.next();

				if (!res.done && i < count) {
					i++;
					return res
				}

				return {
					value: null,
					done: true,
				};
			},

			[Symbol.iterator]() {
				return this;
			}
		};

		this.#iter[Symbol.iterator] = () => newIter;
		return this;
	}
}

