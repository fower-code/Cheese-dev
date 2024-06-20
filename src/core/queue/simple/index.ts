import {FirstLastList} from "~core/linked-list";

export default class Queue<T> {
	get length() {
		return this.innerStruct.length;
	}

	protected firstItem: CanNull<T> = null;

	protected popItem: CanNull<T> = null;

	protected innerStruct: FirstLastList<T>;

	constructor() {
		this.innerStruct = new FirstLastList<T>();
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
