import FLNode from "~core/linked-list/first-last/node";

/**
 * @description Класс двустороннего списка.
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

	* [Symbol.iterator]() {
		let
			current: FLNode<T> | null = this.firstNode;

		while (current) {
			yield current.data;
			current = current.next;
		}
	}

	/**
	 * @description Добавляет элемент в начало списка.
	 * @param item Новый элемент списка
	 */
	public insertFirst(item: T): void {
		const
			newNode: FLNode<T> = new FLNode(item);

		this.lengthList++;

		if (this.firstNode === null) {
			this.lastNode = newNode;
		}

		newNode.next = this.firstNode;
		this.firstNode = newNode;
	}

	/**
	 * @description Удаляет элемент из начала списка.
	 * @return LLNode<T> | null
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
	 * @param item Новый элемент списка
	 */
	public insertLast(item: T): void {
		const
			newNode: FLNode<T> = new FLNode(item);

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
	public reverse(){
		if (this.isEmpty()) {
			return;
		}
	}

	/**
	 * @description Возвращает true, если список пустой, и false в обратном случае
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
