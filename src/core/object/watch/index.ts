import { WatchHandler } from "~core/object/watch/interfaces";

export type { WatchHandler };

export default function watch<T extends object>(
	obj: T,
	handler: WatchHandler<unknown>,
	path: (string | symbol)[] = [],
): T {
	const proxy = new Proxy<T>(obj, {
		get(target, p, receiver) {
			const val = Reflect.get(target, p, receiver);

			if (
				typeof val === "function" &&
				/\[native code]/.test(val.toString())
			) {
				if (Array.isArray(target)) {
					return val;
				}

				if (target instanceof Map) {
					switch (p) {
						case "set":
							return (key: unknown, valToSet: unknown) => {
								handler(valToSet, target.get(key), [...path, key]);
								return val.call(target, key, valToSet);
							};

						case "get":
							return (key: unknown) => {
								const valFromGet = val.call(target, key);
								if (
									valFromGet != null &&
									typeof valFromGet === "object"
								) {
									return watch(valFromGet, handler, [...path, p]);
								}
							};
					}

					// if (p === "set") {
					// 	return (key: unknown, valToSet: unknown) => {
					// 		handler(valToSet, target.get(key), [...path, key]);
					// 		return val.call(target, key, valToSet);
					// 	};					//
					// } else if (p === "get") {
					// 	return (key: unknown) => {
					// 		const valFromGet = val.call(target, key);
					// 		if (valFromGet != null && typeof valFromGet === "object") {
					// 			return watch(valFromGet, handler, [...path, p]);
					// 		}
					// 	};
					// }
				}
			}

			if (val != null && typeof val === "object") {
				return watch(val, handler, [...path, p]);
			}

			return val;
		},

		set(target, p, value, receiver) {
			const old = Reflect.get(target, p, receiver),
				res = Reflect.set(target, p, value, receiver);

			if (res) {
				handler(value, old, [...path, p]);
			}

			return res;
		},

		deleteProperty(target, p) {
			const old = Reflect.get(target, p, proxy),
				res = Reflect.deleteProperty(target, p);

			if (res) {
				handler(undefined, old, [...path, p]);
			}

			return res;
		},
	});

	return proxy;
}
