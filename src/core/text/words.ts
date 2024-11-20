/**
 * Splits a string into an array of words.
 *
 * This function uses a regular expression to identify words in the input string.
 * Words are defined as sequences of non-whitespace characters bounded by word boundaries.
 *
 * @param {string} s - The input string to be split into words.
 * @returns {string[]} An array of words extracted from the input string.
 *
 * @example
 * const result = words("Hello, world!");
 * console.log(result); // ["Hello,", "world!"]
 */
export function words(s: string): string[] {
	return [...wordsIter(s)];
}

/**
 * An iterable iterator that produces words from a string one at a time.
 *
 * This function uses a regular expression to find words in the input string.
 * Words are defined as sequences of non-whitespace characters bounded by word boundaries.
 *
 * @param {string} s - The input string to iterate over for words.
 * @returns {IterableIterator<string>} An iterable iterator that yields words from the input
 * string.
 *
 * @example
 * const iterator = wordsIter("Hello, world!");
 * for (const word of iterator) {
 *   console.log(word); // "Hello,", then "world!"
 * }
 */
export function wordsIter(s: string): IterableIterator<string> {
	const re = /\b[^\s]+\b/g;

	let word = re.exec(s);

	return {
		next() {
			if (word) {
				const val = word[0];

				word = re.exec(s);

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

export function unWords(
	iterable: Iterable<string>,
	separator: CanUndef<string> = " ",
) {
	const a = [...iterable];

	if (a.length === 0) {
		return "";
	}

	return a.join(separator);
}
