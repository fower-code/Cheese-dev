/**
 * @description Узел двустороннего списка.
 */
export default class FLNode<T> {
	public next: FLNode<T> | null;
	public data: T;

	constructor(data: T, next?: FLNode<T> | null) {
		this.data = data;
		this.next = next ?? null;
	}

	[Symbol.iterator](): IterableIterator<T> {
		let
			node: CanNull<FLNode<T>> = this;

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
