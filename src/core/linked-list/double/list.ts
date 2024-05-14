import DLNode from "~core/linked-list/double/node";

/**
 * @description Класс двустороннего списка.
 */
export default class DoubleLinkedList<T> {
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
	 * @description Ссылка на первый элемент списка.
	 * @protected
	 */
	protected firstNode: CanNull<DLNode<T>> = null;

	/**
	 * @description Ссылка на последний элемент списка.
	 * @protected
	 */
	protected lastNode: CanNull<DLNode<T>> = null;

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
					value: null
				};
			},

			[Symbol.iterator]() {
				return this;
			}
		};
	}

	/**
	 * @description Добавляет элемент в начало списка.
	 * @param item Новый элемент списка
	 */
	public insertFirst(item: T): void {
		const
			newNode: DLNode<T> = new DLNode(item);

		if (this.firstNode == null) {
			this.lastNode = newNode;

		} else {
			this.firstNode.prev = newNode;
		}

		newNode.next = this.firstNode;
		this.firstNode = newNode;
	}

	/**
	 * @description Удаляет элемент из начала списка.
	 * @return T | null
	 */
	public removeFirst(): T | null {
		if (this.firstNode == null) {
			return null;
		}

		const
			val = this.firstNode;

		if (this.firstNode.next === null) {
			this.lastNode = null;

		} else {
			this.firstNode.next.prev = null;
		}

		this.firstNode = this.firstNode.next;
		return val.data;
	}

	/**
	 * @description Добавляет элемент в конец списка.
	 * @param item Новый элемент списка
	 */
	public insertLast(item: T) {
		const
			newNode: DLNode<T> = new DLNode(item);

		if (this.lastNode === null) {
			this.firstNode = newNode;

		} else {
			this.lastNode.next = newNode;
			newNode.prev = this.lastNode;
		}

		this.lastNode = newNode;
	}

	/**
	 * @description Удаляет элемент из конца списка.
	 * @return T | null
	 */
	public removeLast(): T | null {
		if (this.firstNode == null) {
			return null;
		}

		if (this.lastNode == null) {
			return null;
		}

		const
			val = this.firstNode;

		if (this.lastNode.prev === null) {
			this.firstNode = null;

		} else {
			this.lastNode.prev.next = null;
		}

		this.lastNode = this.lastNode.prev;
		return val.data;
	}

	/**
	 * @description Возвращает true, если список пустой, и false в обратном случае
	 * @return boolean
	 */
	public isEmpty(): boolean {
		return this.firstNode == null && this.lastNode == null;
	}

	/**
	 * @description Очищает список
	 */
	public clear(): void {
		this.firstNode = null;
		this.lastNode = null;
	}
};
