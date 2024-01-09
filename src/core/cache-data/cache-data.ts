import type {CacheOptions, CacheStrategy} from "@core/cache-data/interface";
import DefaultStrategy from "@core/cache-data/strategy";

export default class CacheData<T> {
	#strategy: CacheStrategy<T>;

	constructor(opts?: CacheOptions<T>) {
		this.#strategy = opts?.strategy ?? new DefaultStrategy();
	}

	public get(key: string) {
		return this.#strategy.get(key)
	}

	public hasKey(key: string): boolean {
		return this.#strategy.hasKey(key);
	}

	public set(key: string, value: T): void {
		this.#strategy.set(key, value);
	}

	public remove(key: string): void {
		this.#strategy.remove(key);
	}

	public clear(): void {
		this.#strategy.clear();
	}

	public isEmpty(): boolean {
		return this.#strategy.isEmpty();
	}

	public isFull() {
		return this.#strategy.isFull();
	}
}
