import type {CacheStrategy} from "~core/cache-data/strategy";

export type {CacheStrategy} from "~core/cache-data/strategy";

export interface CacheOptions<T> {
	strategy?: CacheStrategy<T>;
}
