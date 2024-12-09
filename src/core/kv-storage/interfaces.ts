import {KVStorageEngine} from "~core/kv-storage/engines/interfaces";

export interface KVStorageOptions {
	engine?: KVStorageEngine;
}
