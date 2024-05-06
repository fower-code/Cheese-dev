/**
 * @description Узел односвязного списка.
 */
export default class LLNode<T> {
	public next: LLNode<T> | null;
	public data: T;

	constructor(data: T, next?: LLNode<T> | null) {
		this.next = next ?? null;
		this.data = data;
	}

	[Symbol.iterator](): IterableIterator<T> {
		let
			node: CanNull<LLNode<T>> = this;

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
		}
	}
};
