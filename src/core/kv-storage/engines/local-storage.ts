import {KVStorageEngine} from "~core/kv-storage/engines/interfaces";

export default class LocalStorage {
	public get(key: string): ReturnType<KVStorageEngine["get"]> {
		return localStorage.getItem(key);
	}

	public set(key: string, val: string): ReturnType<KVStorageEngine["set"]> {
		localStorage.setItem(key, val);
	}

	public remove(key: string): ReturnType<KVStorageEngine["remove"]> {
		localStorage.removeItem(key);
	}
};
