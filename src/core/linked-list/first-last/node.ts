/**
 * @description Узел двустороннего списка.
 */
export default class FLNode<T> {
	public next: FLNode<T> | null;
	public data: T;

	constructor(data: T, next?: FLNode<T> | null) {
		this.next = next ?? null;
		this.data = data;
	}
};
