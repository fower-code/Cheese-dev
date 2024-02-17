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
};
