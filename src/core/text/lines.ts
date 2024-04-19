export function lines(s: string) {
	if (s.length === 0) {
		return [s];
	}

	return s.split(/\n+/);
}

export function linesIter(s: string){
	// todo поправить регулярку
	let rExpr = /(?<n>(|\n))(?<l>[a-zA-Zа-яА-Я-,.!?$# ]+)\k<n>/g;

	let res = rExpr.exec(s);

	return {
		next() {
			if (res == null) {
				return {
					value: null,
					done: true,
				}
			}

			// todo поправить работу с groups. Возможно, нужно сделать модуль по работе с регулярками.
			const val = res.groups?.l;

			res = rExpr.exec(s);

			return {
				value: val,
				done: false,
			}
		},

		[Symbol.iterator]() {
			return this;
		}
	}
}

export function unLines(a: string[]) {
	if (a.length === 0) {
		return ""
	}

	return a.join("\n");
}

export function unLinesIter(s: string) {
	// todo
}
