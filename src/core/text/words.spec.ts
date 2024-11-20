import { unWords, words, wordsIter } from "~core/text/words";

describe("core/text/words, fn words", () => {
	test("words with multi-line string", () => {
		const text =
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 1\n" +
			"lorem ipsum lorem ipsum lorem ipsum lorem ipsum 2\n" +
			"lorem ipsum lorem ipsum lorem ipsum lorem ipsum 3";

		expect(words(text)).toEqual([
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"1",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"2",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"3",
		]);
	});

	test("words with single string", () => {
		const text = `lorem ipsum lorem ipsum lorem ipsum lorem ipsum`;

		expect(words(text)).toEqual([
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
		]);
	});
});

describe("core/text/words, fn wordsIter", () => {
	test("wordsIter with multi-line string", () => {
		const text =
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 1\n" +
			"lorem ipsum lorem ipsum lorem ipsum lorem ipsum 2\n" +
			"lorem ipsum lorem ipsum lorem ipsum lorem ipsum 3";

		expect([...wordsIter(text)]).toEqual([
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"1",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"2",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"3",
		]);
	});

	test("wordsIter with single string", () => {
		const text = `lorem ipsum lorem ipsum lorem ipsum lorem ipsum`;

		expect([...wordsIter(text)]).toEqual([
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
		]);
	});
});

describe("core/text/words, fn unWords", () => {
	test("unWords with default separator", () => {
		const text = [
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
		];

		expect(unWords(text)).toEqual(
			"lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
		);
	});

	test("unWords with separator '\\n'", () => {
		const text = [
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
			"lorem",
			"ipsum",
		];

		expect(unWords(text, "\n")).toEqual(
			"lorem\nipsum\nlorem\nipsum\nlorem\nipsum\nlorem\nipsum",
		);
	});
});
