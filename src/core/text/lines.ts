/**
 * Splits a string into an array of lines.
 *
 * This function takes a string and splits it into an array of substrings,
 * where each substring represents a line of text. It uses newline characters
 * as the delimiter. If the input string is empty, it returns an array containing
 * the empty string.
 *
 * @param {string} s - The input string to be split into lines.
 * @returns {string[]} An array of strings, where each string is a line from the input.
 *
 * @example
 * const result = lines("Hello\nWorld");
 * console.log(result); // ['Hello', 'World']
 */
export function lines(s: string): string[] {
	return [...linesIter(s)];
}

/**
 * Creates an iterator that yields lines from a string lazily.
 *
 * This function returns an iterator that lazily produces each line of the
 * input string when called. It uses a regular expression to match lines,
 * allowing for efficient memory usage when processing large strings.
 *
 * @param {string} s - The input string to iterate over.
 * @returns {IterableIterator<string>} An iterator that yields each line of the
 * string.
 *
 * @example
 * const iterator = linesIter("Hello\nWorld");
 * for (const line of iterator) {
 *   console.log(line); // Outputs: 'Hello' then 'World'
 * }
 */
export function linesIter(s: string): IterableIterator<string> {
	const re = /^.+$/gm;

	let line = re.exec(s);

	return {
		next() {
			if (line) {
				const val = line[0];

				line = re.exec(s);

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
		},
	};
}

/**
 * Joins an array of lines into a single string with newline characters.
 *
 * This function takes an array of strings and concatenates them into a single
 * string, with each element separated by a newline character. If the input
 * array is empty, it returns an empty string.
 *
 * @param {string[]} a - The array of strings to be joined.
 * @returns {string} A single string with each element joined by a newline character.
 *
 * @example
 * const result = unLines(['Hello', 'World']);
 * console.log(result); // 'Hello\nWorld'
 */
export function unLines(a: string[]): string {
	if (a.length === 0) {
		return "";
	}

	return a.join("\n");
}
