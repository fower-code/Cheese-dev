/**
 * @description Класс Result представляет обёртку над данными, которых могут содержать ошибку.
 */
export default class Result<T> {
	readonly #data: CanError<T>;

	/**
	 * @description возвращает true, если данные содержат ошибку, и false в обратном случае.
	 */
	get isError() {
		return this.#data instanceof Error;
	}

	constructor(data: CanError<T>) {
		this.#data = data;
	}

	/**
	 * @description возвращает данные, или кидает исключение (если есть ошибка).
	 */
	public unwrap() {
		if (this.isError) {
			throw this.#data;
		}

		return this.#data;
	}

	/**
	 * @description Возвращает новый объект Result. Принимает callback, и в новый Result будет возвращаться то, что
	 * функция вернула. Но если данные isError, то возвращается Result(this.#data)
	 * @param cb
	 */
	public then(cb: (data: CanError<T>) => unknown) {
		console.log(this.#data);
		if (this.isError) {
			return new Result(this.#data);
		}

		try {
			return new Result(cb(this.#data));
		} catch (err) {
			return new Result(err);
		}
	}

	/**
	 * @description Возвращает новый объект Result. Принимает callback, и в новый Result будет возвращаться то, что
	 * функция вернула, если есть ошибка. Но если данные не isError, то возвращается Result(this.#data).
	 * @param cb
	 */
	public catch(cb: (data: CanError<T>) => unknown) {
		if (!this.isError) {
			return new Result(this.#data);
		}

		try {
			return new Result(cb(this.#data));
		} catch (err) {
			return new Result(err);
		}
	}
}
