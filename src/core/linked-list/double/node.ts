/**
 * @description Узел двустороннего списка.
 */
export default class DLNode<T> {
	/**
	 * @description Ссылка на предыдущий узел.
	 */
	public prev: DLNode<T> | null;

	/**
	 * @description Ссылка на следующий узел.
	 */
	public next: DLNode<T> | null;

	/**
	 * @description Значение (тело) узла.
	 */
	public data: T;

	constructor(data: T, prev?: CanNull<DLNode<T>>, next?: CanNull<DLNode<T>>) {
		this.data = data;
		this.prev = prev ?? null;
		this.next = next ?? null;
	}

	[Symbol.iterator](): IterableIterator<T> {
		let
			node: CanNull<DLNode<T>> = this;

		return {
			next() {
				if (node) {
					const temp = node;
					node = node.next;

					return {
						done: false,
						value: temp.data
					};
				}

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
};
