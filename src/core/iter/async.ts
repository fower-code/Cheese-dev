export default class AsyncIter<T> {
	readonly #iter: AsyncIterable<T>;

	constructor(iter: AsyncIterable<T>) {
		this.#iter = iter;
	}
};
