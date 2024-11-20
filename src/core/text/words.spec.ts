import {unWords, words, wordsIter} from "~core/text/words";

describe("core/text/words, fn words", () => {
	test("words with multi-line string", () => {
		const text = `		l1o.rem ipsum lorem ipsum lorem ipsum lorem ipsum 1
lorem ipsum lorem ipsum lorem ipsum lorem ipsum 2
lorem ipsum lorem ipsum lorem ipsum lorem ipsum 3`;

		expect(words(text)).toEqual([
			'l1o.rem', 'ipsum', 'lorem', 'ipsum', 'lorem', 'ipsum', 'lorem',
			'ipsum', '1', 'lorem', 'ipsum', 'lorem', 'ipsum', 'lorem', 'ipsum',
			'lorem', 'ipsum', '2', 'lorem', 'ipsum', 'lorem', 'ipsum', 'lorem',
			'ipsum', 'lorem', 'ipsum', '3'
		]);
	});

	test("words with single string", () => {
		const text = `lorem ipsum lorem ipsum lorem ipsum lorem ipsum`;

		expect(words(text)).toEqual([
			'lorem', 'ipsum', 'lorem', 'ipsum', 'lorem', 'ipsum', 'lorem', 'ipsum'
		]);
	});
});

describe("core/text/words, fn wordsIter", () => {
	test("wordsIter with multi-line string", () => {
		const text1 = `		l1o.rem ipsum lorem ipsum lorem ipsum lorem ipsum 1
lorem ipsum lorem ipsum lorem ipsum lorem ipsum 2
lorem ipsum lorem ipsum lorem ipsum lorem ipsum 3`;

		expect([...wordsIter(text1)]).toEqual([
			'l1o.rem', 'ipsum', 'lorem', 'ipsum', 'lorem', 'ipsum', 'lorem',
			'ipsum', '1', 'lorem', 'ipsum', 'lorem', 'ipsum', 'lorem', 'ipsum',
			'lorem', 'ipsum', '2', 'lorem', 'ipsum', 'lorem', 'ipsum', 'lorem',
			'ipsum', 'lorem', 'ipsum', '3'
		]);
	});

	test("wordsIter with single string", () => {
		const text = `lorem ipsum lorem ipsum lorem ipsum lorem ipsum`;

		expect([...wordsIter(text)]).toEqual([
			'lorem', 'ipsum', 'lorem', 'ipsum', 'lorem', 'ipsum', 'lorem', 'ipsum'
		]);
	});
});

describe("core/text/words, fn unWords", () => {
	test("unWords with default separator", () => {
		const text = [
			'lorem', 'ipsum', 'lorem', 'ipsum', 'lorem', 'ipsum', 'lorem', 'ipsum'
		];

		expect(unWords(text)).toEqual("lorem ipsum lorem ipsum lorem ipsum lorem ipsum");
	});

	test("unWords with separator '\\n'", () => {
		const text = [
			'lorem', 'ipsum', 'lorem', 'ipsum', 'lorem', 'ipsum', 'lorem', 'ipsum'
		];

		expect(unWords(text, "\n")).toEqual(
			"lorem\n" +
			"ipsum\n" +
			"lorem\n" +
			"ipsum\n" +
			"lorem\n" +
			"ipsum\n" +
			"lorem\n" +
			"ipsum"
		);
	});
});
