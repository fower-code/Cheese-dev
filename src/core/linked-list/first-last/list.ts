import FLNode from "~core/linked-list/first-last/node";

/**
 * @description Класс двустороннего списка.
 * @template T - Тип значения узла списка.
 */
export default class FirstLastList<T> {
	/**
	 * @description Возвращает первый узел списка.
	 */
	get first(): CanNull<T> {
		return this.firstNode?.data ?? null;
	}

	/**
	 * @description Возвращает первый узел списка.
	 */
	get last(): CanNull<T> {
		return this.lastNode?.data ?? null;
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
	protected firstNode: CanNull<FLNode<T>> = null;

	/**
	 * @description Ссылка на последний элемент списка.
	 * @protected
	 */
	protected lastNode: CanNull<FLNode<T>> = null;

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

	[Symbol.iterator](): IterableIterator<T> {
		if (this.firstNode) {
			return this.firstNode[Symbol.iterator]();
		}

		return {
			next() {
				return {
					done: true,
					value: null,
				};
			},

			[Symbol.iterator]() {
				return this;
			},
		};
	}

	/**
	 * @description Добавляет элемент в начало списка.
	 * @param {T} item - Новый элемент списка.
	 */
	public insertFirst(item: T): void {
		const newNode: FLNode<T> = new FLNode(item);

		this.lengthList++;

		if (this.firstNode === null) {
			this.lastNode = newNode;
		}

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

		if (this.firstNode.next === null) {
			this.lastNode = null;
		}

		const val: FLNode<T> = this.firstNode;
		this.lengthList--;
		this.firstNode = this.firstNode.next;
		return val.data;
	}

	/**
	 * @description Добавляет элемент в конец списка.
	 * @param {T} item - Новый элемент списка.
	 */
	public insertLast(item: T): void {
		const newNode: FLNode<T> = new FLNode(item);

		this.lengthList++;

		if (this.lastNode === null) {
			this.firstNode = newNode;
			this.lastNode = newNode;
			return;
		}

		this.lastNode.next = newNode;
		this.lastNode = newNode;
	}

	/**
	 * @description Разворачивает список.
	 */
	public reverse() {
		if (this.isEmpty()) {
			return;
		}

		let prev: CanNull<FLNode<T>> = null,
			next: CanNull<FLNode<T>> = null,
			current: CanNull<FLNode<T>> = this.firstNode;

		while (current !== null) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}

		[this.lastNode, this.firstNode] = [this.firstNode, prev];
	}

	/**
	 * @description Возвращает true, если список пустой, и false
	 * в обратном случае.
	 * @return boolean
	 */
	public isEmpty(): boolean {
		return this.firstNode === null && this.lastNode === null;
	}

	/**
	 * @description Очищает список.
	 */
	public clear(): void {
		this.firstNode = null;
		this.lastNode = null;
		this.lengthList = 0;
	}
}
