import { KVStorageEngine } from "~core/kv-storage/engines/interfaces";

export interface KVStorageOptions {
	engine?: KVStorageEngine;
}

export type SerializableVal =
	SerializablePrimitiveVal |
	SerializablePrimitiveVal[] |
	Record<string, SerializablePrimitiveVal> |
	{ toJSON(): SerializableVal };

export type SerializablePrimitiveVal =
	string |
	number |
	boolean |
	null;
