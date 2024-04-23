export function lines(s: string) {
	if (s.length === 0) {
		return [s];
	}

	return s.split(/\n+/);
}

export function linesIter(s: string){
	let
		rExpr = /(?<l>[^\r\n]+)/g;

	let
		res = rExpr.exec(s);

	return {
		next() {
			if (res?.groups?.l) {
				const val = res.groups.l;

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

export function unLines(a: string[]) {
	if (a.length === 0) {
		return ""
	}

	return a.join("\n");
}
