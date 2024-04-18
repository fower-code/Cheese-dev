export default class Iter <T>{
	#iter: Iterable<T>

	constructor(iter:Iterable<T>) {
		this.#iter = iter;
	}

	public map() {
		const that = this;
		const iter = this.#iter[Symbol.iterator]();

		const newIter: Iterator<T> = {
			next(): IteratorResult<T> {
				let res = iter.next();
				console.log(res.value);

				if (res.done) {
					return {
						value: res.value,
						done: false,
					};

				}
				return {
					value: null,
					done: true
				};
			},

			// [Symbol.iterator]() {
			// 	return that.#iter;
			// }
		};

		console.log(this.#iter[Symbol.iterator]);
		console.log(newIter);

		this.#iter[Symbol.iterator] = {...newIter};
	}
}

