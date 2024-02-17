import LLNode from "~core/linked-list/singly/node";

/**
 * @description Класс односвязного списка.
 */
export default class LinkedList<T> {
	/**
	 * @description Возвращает первый узел списка.
	 */
	get first(): CanNull<T> {
		return this.firstNode?.data ?? null;
	}

	/**
	 * @description Возвращает длину списка.
	 */
	get length(): number {
		return this.lengthList;
	}

	/**
	 * @description Ссылка на первый элемент списка.
	 * @protected
	 */
	protected firstNode: CanNull<LLNode<T>> = null;

	/**
	 * @description Длина списка.
	 * @protected
	 */
	protected lengthList: number = 0;

	constructor(iterable?: Iterable<T>) {
		if (iterable) {
			for (const el of iterable) {
				this.insertFirst(el);
			}
		}
	}

	* [Symbol.iterator]() {
		let
			current: CanNull<LLNode<T>> = this.firstNode;

		while (current) {
			yield current.data;
			current = current.next;
		}
	}

	/**
	 * @description Добавляет элемент в начало списка.
	 * @param {T} item Новый элемент списка
	 */
	public insertFirst(item: T): void {
		const newNode: LLNode<T> = new LLNode(item);
		this.lengthList++;
		newNode.next = this.firstNode;
		this.firstNode = newNode;
	}

	/**
	 * @description Удаляет элемент из начала списка.
	 * @return {T | null}
	 */
	public removeFirst(): T | null {
		if (this.firstNode === null) {
			return null;
		}

		const val: LLNode<T> = this.firstNode;
		this.lengthList--;
		this.firstNode = this.firstNode.next;
		return val.data;
	}

	/**
	 * @description Разворачивает список.
	 */
	public reverse() {
		if (this.isEmpty()) {
			return;
		}

		let
			prev: CanNull<LLNode<T>> = null,
			current: CanNull<LLNode<T>> = this.firstNode,
			next: CanNull<LLNode<T>> = null;

		while (current !== null) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}

		this.firstNode = prev;
	}

	/**
	 * @description Возвращает true, если список пустой, и false в обратном случае
	 * @return boolean
	 */
	public isEmpty(): boolean {
		return this.firstNode === null;
	}

	/**
	 * @description Очищает список.
	 */
	public clear(): void {
		this.lengthList = 0;
		this.firstNode = null;
	}
};
