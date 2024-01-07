import type {CacheStrategy} from "@core/cache-data/strategy/interface";

/**
 * @description Класс простого кеширования.
 */
export default class SimpleCache<T> implements CacheStrategy<T> {
	#cacheMap: Map<string, T>;

	constructor() {
		this.#cacheMap = new Map([]);
	}

	public hasKey(key: string): boolean {
		return this.#cacheMap.has(key);
	}

	public get(key: string): T | undefined {
		return this.#cacheMap.get(key);
	}

	public set(key: string, value: T): void {
		this.#cacheMap.set(key, value);
	}

	public remove(key: string): void {
		this.#cacheMap.delete(key);
	}

	public clear(): void {
		this.#cacheMap.clear();
	}

	public isEmpty(): boolean {
		return this.#cacheMap.size === 0;
	}

	public isFull(): boolean {
		return false;
	}
}
