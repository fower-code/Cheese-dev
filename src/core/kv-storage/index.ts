import { KVStorageEngine, KVStorageOptions } from "~core/kv-storage/interfaces";
import DefaultEngine from "~core/kv-storage/engines";

export default class KVStorage {
	protected engine: KVStorageEngine;

	constructor(opts: KVStorageOptions) {
		this.engine = opts.engine ?? new DefaultEngine();
	}
}
