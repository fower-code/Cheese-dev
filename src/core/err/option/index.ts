/**
 * @description Класс Option представляет обертку над данными, которых может не быть.
 */
export default class Option<T> {
	static None: undefined;

	/**
	 * @description возвращает true, если данных нет, и false в обратном случае.
	 */
	get isNone(): boolean {
		return this.#data == Option.None;
	}

	readonly #data: Nullable<T>;

	constructor(data: Nullable<T>) {
		this.#data = data;
	}

	/**
	 * @description Возвращает данные, либо кидает исключение (данных нет).
	 */
	public unwrap() {
		if (this.isNone) {
			throw new Error("Data in none");
		}

		return this.#data;
	}

	/**
	 * @description Возвращает новый объект Option. Принимает callback, и в новый option будет возвращаться то, что
	 * функция вернула. Но если данные isNone, то возвращается Option(Option.None)
	 * @param cb
	 */
	public then(cb: (data: Nullable<T>) => unknown) {
		if (this.isNone) {
			return new Option(Option.None);
		}

		try {
			return new Option(cb(this.#data));

		} catch (err) {
			return new Option(Option.None);
		}
	}

	/**
	 * @description Принимает новый объект Option и возвращает его, если данные None
	 * @param option
	 */
	public or(option: Option<T>) {
		if (this.isNone) {
			if (option instanceof Option) {
				return option;
			}

			return new Option(option);
		}

		return this;
	}
}
