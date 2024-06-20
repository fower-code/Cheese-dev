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

	[Symbol.iterator](): IterableIterator<T> {
		return this.innerStruct[Symbol.iterator]();
	}

	/**
	 * @description Добавляет элемент в начало очереди.
	 * @param {T} item Новый элемент очереди.
	 */
	public insertFirst(item: T) {
		this.innerStruct.insertFirst(item);
	}

	/**
	 * @description Извлекает элемент из начала очереди.
	 */
	public removeFirst() {
		return this.innerStruct.removeFirst();
	}

	/**
	 * @description Добавляет элемент в конец очереди.
	 * @param {T} item Новый элемент очереди.
	 */
	public insertLast(item: T) {
		this.innerStruct.insertLast(item);
	}

	/**
	 * @description Извлекает элемент из конца очереди.
	 */
	public removeLast() {
		return this.innerStruct.removeLast();
	}

	/**
	 * @description Возвращает true, если очередь пуста, и false в обратном случае.
	 * @return {boolean}
	 */
	public isEmpty(): boolean {
		return this.innerStruct.isEmpty();
	}

	/**
	 * @description Очищает очередь.
	 */
	public clear() {
		this.innerStruct.clear();
	}
};
