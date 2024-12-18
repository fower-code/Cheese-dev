import { lines, linesIter, unLines } from "~core/text/lines";

describe("core/text/lines, fn lines", () => {
	test("lines", () => {
		const text =
			"\n" +
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 1\n" +
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 2\n" +
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 3\n" +
			"";

		expect(lines(text)).toEqual([
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 1",
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 2",
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 3",
		]);
	});
});

describe("core/text/lines, fn linesIter", () => {
	test("linesIter", () => {
		const text =
			"\n" +
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 1\n" +
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 2\n" +
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 3\n" +
			"";

		expect([...linesIter(text)]).toEqual([
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 1",
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 2",
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 3",
		]);
	});
});

describe("core/text/lines, fn unLines", () => {
	test("unLines", () => {
		const lines = [
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 1",
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 2",
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 3",
		];

		expect(unLines(lines)).toBe(
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 1\n" +
				"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 2\n" +
				"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 3",
		);
	});
});
