import {FirstLastList} from "~core/linked-list";

export default class Queue<T> {
	get length() {
		return this.innerStruct.length;
	}

	get first() {
		return this.innerStruct.first;
	}

	get last() {
		return this.innerStruct.last;
	}

	protected innerStruct: FirstLastList<T>;

	constructor(iterable?: Iterable<T>) {
		this.innerStruct = new FirstLastList<T>(iterable);
	}

	/**
	 * @description Добавляет элемент в очередь
	 * @param item Новый элемент очереди
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
	 * @description Возвращает true, если очередь пуста, и false в обратном случае
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
};
