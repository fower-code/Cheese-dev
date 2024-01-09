import type {CacheStrategy} from "@core/cache-data/strategy/interface";
import type {LRUCacheOptions} from "@core/cache-data/strategy/lru/interface";

/**
 * @description Класс LRU-кеширования.
 */
export default class LRUCache<T> implements CacheStrategy<T> {
	#queue: Map<string, T>;

	readonly #maxSize: number;

	constructor(opts?: LRUCacheOptions) {
		if (opts?.maxSize <= 0) {
			throw new RangeError("maxSize cache must be greater than 0");
		}

		this.#maxSize = opts?.maxSize ?? 10;
		this.#queue = new Map([]);
	}

	public hasKey(key: string): boolean {
		return this.#queue.has(key);
	}

	public get(key: string): T | undefined {
		const
			val: T | undefined = this.#queue.get(key);

		if (val) {
			this.#queue.delete(key);
			this.#queue.set(key, val);
			return val;
		}
	}

	public set(key: string, value: T): void {
		if (this.#queue.has(key)) {
			this.#queue.delete(key);
		}

		if (this.#maxSize <= this.#queue.size) {
			this.#queue.delete(this.#queue.keys().next().value);
		}

		this.#queue.set(key, value);
	}

	public remove(key: string): void {
		// todo
		this.#queue.delete(key);
	}

	public clear(): void {
		this.#queue.clear();
	}

	public isEmpty(): boolean {
		return this.#queue.size === 0;
	}

	public isFull(): boolean {
		return this.#queue.size === this.#maxSize;
	}
}
