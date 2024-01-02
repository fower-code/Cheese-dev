import {LLNode} from "@core/linked-list/singly/node";

/**
 * @description Класс односвязного списка.
 */
export class LinkedList<T> {
    #first: LLNode<T> | null;

    constructor() {
        this.#first = null;
    }

    * [Symbol.iterator]() {
        let
            current: LLNode<T> | null = this.#first;

        while (current) {
            yield current;
            current = current.next;
        }
    }

    /**
     * @description Добавляет элемент в начало списка.
     * @param item Новый элемент списка
     */
    public insertFirst(item: T): void {
        const newNode: LLNode<T> = new LLNode(item);
        newNode.next = this.#first;
        this.#first = newNode;
    }

    /**
     * @description Удаляет элемент из начала списка.
     * @return LLNode<T> | null
     */
    public removeFirst(): LLNode<T> | null {
        if (this.#first === null) {
            return null;
        }

        const val: LLNode<T> = this.#first;
        this.#first = this.#first.next;
        return val;
    }

    /**
     * @description Возвращает true, если список пустой, и false в обратном случае
     * @return boolean
     */
    public isEmpty(): boolean {
        return this.#first === null;
    }

    /**
     * @description Очищает список
     */
    public clear(): void {
        this.#first = null;
    }
}
