/**
 * @description Узел двустороннего списка.
 * @template T - Тип значения (тела) узла.
 */
export default class FLNode<T> {
	/**
	 * @description Ссылка на следующий узел.
	 */
	public next: FLNode<T> | null;

	/**
	 * @description Значение (тело) узла.
	 */
	public data: T;

	constructor(data: T, next?: FLNode<T> | null) {
		this.data = data;
		this.next = next ?? null;
	}

	[Symbol.iterator](): IterableIterator<T> {
		let node: CanNull<FLNode<T>> = this;

		return {
			next() {
				if (node) {
					const temp = node;
					node = node.next;

					return {
						done: false,
						value: temp.data,
					};
				}

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
}
