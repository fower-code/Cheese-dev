import DoubleLinkedList from "~core/linked-list/double";

/**
 * @description Класс двусторней очереди.
 * @template T - Тип значения элемента очереди.
 */
export default class Deque<T> {
	/**
	 * @description Возвращает первый элемент очереди.
	 */
	get first() {
		return this.innerStruct.first;
	}

	/**
	 * @description Возвращает первый элемент очереди.
	 */
	get last() {
		return this.innerStruct.last;
	}

	/**
	 * @description Возвращает длину очереди.
	 */
	get length() {
		return this.innerStruct.length;
	}

	/**
	 * @description Внутреняя структура для очереди.
	 * @protected
	 */
	protected innerStruct: DoubleLinkedList<T>;

	constructor(iterable?: Iterable<T>) {
		this.innerStruct = new DoubleLinkedList<T>(iterable);
	}
};
