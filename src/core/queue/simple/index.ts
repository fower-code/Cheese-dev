import { FirstLastList } from "~core/linked-list";

/**
 * @description Класс очереди.
 * @template T - Тип значения элемента очереди.
 */
export default class Queue<T> {
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
	protected innerStruct: FirstLastList<T>;

	constructor(iterable?: Iterable<T>) {
		this.innerStruct = new FirstLastList<T>(iterable);
	}

	[Symbol.iterator](): IterableIterator<T> {
		return this.innerStruct[Symbol.iterator]();
	}

	/**
	 * @description Добавляет элемент в очередь.
	 * @param {T} item Новый элемент очереди.
	 */
	public insert(item: T) {
		this.innerStruct.insertLast(item);
	}

	/**
	 * @description Извлекает элемент из очереди.
	 */
	public remove() {
		return this.innerStruct.removeFirst();
	}

	/**
	 * @description Возвращает true, если очередь пуста, и false в обратном случае.
	 * @return boolean
	 */
	public isEmpty() {
		return this.innerStruct.isEmpty();
	}

	/**
	 * @description Очищает очередь.
	 */
	public clear() {
		this.innerStruct.clear();
	}
}
