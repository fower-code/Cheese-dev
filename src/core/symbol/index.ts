export default function symbolGenerator() {
	return new Proxy<Record<string | symbol, symbol>>({}, {
		get(target, p) {
			if (p in target) {
				return target[p];
			}

			return target[p] = Symbol(String(p));
		}
	})
};
