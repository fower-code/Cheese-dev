import {FLNode} from "@core/linked-list/first-last/node";

/**
 * @description Класс двустороннего списка.
 */
export class FirstLastList<T> {
    #first: FLNode<T> | null;
    #last: FLNode<T> | null;

    constructor() {
        this.#first = null;
        this.#last = null;
    }

    * [Symbol.iterator]() {
        let
            current: FLNode<T> | null = this.#first;

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
        const
            newNode: FLNode<T> = new FLNode(item);

        if (this.#first === null) {
            this.#last = newNode;
        }

        newNode.next = this.#first;
        this.#first = newNode;
    }

    /**
     * @description Удаляет элемент из начала списка.
     * @return LLNode<T> | null
     */
    public removeFirst(): FLNode<T> | null {
        if (this.#first === null) {
            return null;
        }

        if (this.#first.next === null) {
            this.#last = null;
        }

        const val = this.#first;
        this.#first = this.#first.next;
        return val;
    }

    /**
     * @description Добавляет элемент в конец списка.
     * @param item Новый элемент списка
     */
    public insertLast(item: T): void {
        const
            newNode: FLNode<T> = new FLNode(item);

        if (this.#last === null) {
            this.#first = newNode;
            this.#last = newNode;
            return;
        }

        this.#last.next = newNode;
        this.#last = newNode;
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
        this.#last = null;
    }
}
