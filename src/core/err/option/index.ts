/**
 * @description Класс Option представляет обертку над данными, которых может не быть.
 */
export default class Option<T> {
	static None = undefined;

	/**
	 * @description возвращает true, если данных нет, и false в обратном случае.
	 */
	get isNone(): boolean {
		return this.#data == null;
	}

	readonly #data: Nullable<T>;

	constructor(data: Nullable<T>) {
		this.#data = data;
	}

	/**
	 * @description Возвращает данные, либо кидает исключение (данных нет).
	 */
	public unwrap() {
		if (this.#data == null) {
			throw new Error("Data in none");
		}

		return this.#data;
	}

	/**
	 * @description Возвращает новый объект Option. Принимает callback, и в новый option будет возвращаться то, что
	 * функция вернула. Но если данные isNone, то возвращается Option(Option.None)
	 * @param cb
	 */
	public then(cb: (data: T) => Nullable<T>) {
		if (this.#data == null) {
			return new Option<T>(Option.None);
		}

		try {
			return new Option<T>(cb(this.#data));
		} catch (err) {
			return new Option<T>(Option.None);
		}
	}

	/**
	 * @description Принимает новый объект Option и возвращает его, если данные None
	 * @param option
	 */
	public or(option: Option<T>) {
		if (this.isNone) {
			// todo
			// if (option instanceof Option) {
			return option;
			// }

			// return new Option(option);
		}

		return this;
	}
}
