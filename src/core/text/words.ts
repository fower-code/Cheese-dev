export function words(s: string) {
	if (s.length === 0) {
		return [s];
	}

	return s.split(/ +/);
}

export function wordsIter(s: string) {
	// todo
}

export function unWords(a:string[]) {
	if (a.length === 0) {
			return "";
	}

	return a.join(" ");
}

export function unWordsIter(s: string) {
	// todo
}
