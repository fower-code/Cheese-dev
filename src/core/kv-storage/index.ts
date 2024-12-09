import { KVStorageEngine, KVStorageOptions, SerializableVal } from "~core/kv-storage/interfaces";
import DefaultEngine from "~core/kv-storage/engines";

export default class KVStorage {
	protected engine: KVStorageEngine;

	constructor(opts: KVStorageOptions) {
		this.engine = opts.engine ?? new DefaultEngine();
	}

	public get(key: string): Nullable<SerializableVal> {
		return this.engine.get(key);
	}

	public set(key: string, val: SerializableVal) {
		const data = JSON.stringify(val);
		this.engine.set(key, data);
	}

	public remove(key:string) {
		this.engine.remove(key);
	}
}
