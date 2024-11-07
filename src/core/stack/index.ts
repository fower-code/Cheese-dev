import { FirstLastList } from "~core/linked-list";

/**
 * @description Класс структуры Stack.
 */
export default class Stack<T> {
	readonly #innerStruct: FirstLastList<T>;

	constructor() {
		this.#innerStruct = new FirstLastList();
	}

	[Symbol.iterator]() {
		return this.#innerStruct[Symbol.iterator]();
	}

	/**
	 * @description Добавляет элемент в стек.
	 * @param item Новый элемент стека
	 */
	public insert(item: T) {
		this.#innerStruct.insertFirst(item);
	}

	/**
	 * @description Удаляет элемент из стек.
	 */
	public remove() {
		return this.#innerStruct.removeFirst();
	}

	/**
	 * @description Возвращает true, если стек пустой, и false в обратном случае.
	 */
	public isEmpty(): boolean {
		return this.#innerStruct.isEmpty();
	}

	/**
	 * @description Очищает стек.
	 */
	public clear() {
		this.#innerStruct.clear();
	}
}
