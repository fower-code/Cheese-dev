export function words(s: string) {
	if (s.length === 0) {
		return [s];
	}

	return s.split(/ +/);
}

export function wordsIter(s: string) {
	let
		rExpr = /(?<w>\b[\w-]+\b)/g;

	let
		res = rExpr.exec(s);

	return {
		next() {
			if (res?.groups?.w) {
				const val = res.groups.w;

				res = rExpr.exec(s);

				return {
					value: val,
					done: false,
				};
			}

			return {
				value: null,
				done: true,
			};
		},

		[Symbol.iterator]() {
			return this;
		}
	};
}

export function unWords(a: string[]) {
	if (a.length === 0) {
		return "";
	}

	return a.join(" ");
}
