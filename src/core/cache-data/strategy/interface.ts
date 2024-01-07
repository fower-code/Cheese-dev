/**
 * @description Интерфейс стратегии кэширования.
 */
export interface CacheStrategy<T> {
	get(key: string): T | undefined;

	hasKey(key: string): boolean;

	set(key: string, value: T): void;

	remove(key: string): void;

	clear(): void;

	isEmpty(): boolean;

	isFull(): boolean;
}
