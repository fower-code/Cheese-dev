/**
 * @description Интерфейс опций LRUCache
 */
export interface LRUCacheOptions {
	/**
	 * @description Максимальный размер кеша, значение должно быть больше 0.
	 * Дефолтное значение maxSize равно 10, это можно изменить в конфиге.
	 */
	maxSize?: number;
}
