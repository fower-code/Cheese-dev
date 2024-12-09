export interface KVStorageEngine {
	get(key: string): Nullable<string>;

	set(key: string, value: string): void;

	remove(key: string): void;
}
