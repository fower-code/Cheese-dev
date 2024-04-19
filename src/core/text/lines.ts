export function lines(s: string) {
	if (s.length === 0) {
		return [s];
	}

	return s.split(/\n+/);
}

export function linesIter(s: string) {
	// todo
}

export function unLines(a:string[]) {
	if (a.length === 0) {
		return ""
	}

	return a.join("\n");
}

export function unLinesIter(s: string) {
	// todo
}
