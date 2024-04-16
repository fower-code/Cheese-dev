export function lines(s: string) {
	if (s.length === 0) {
		return [s];
	}

	return s.split(/\n+/);
}

export function linesIter(s: string) {
	// todo
}

export function words(s: string) {
	if (s.length === 0) {
		return [s];
	}

	return s.split(/ +/);
}

export function wordsIter(s: string) {
	// todo
}
