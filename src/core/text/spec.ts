import {lines, linesIter, unLines} from "~core/text/lines";

describe("core/text/lines", () => {
	test("lines", () => {
		const text = `
		lorem ipsum lorem ipsum lorem ipsum lorem ipsum 1
		lorem ipsum lorem ipsum lorem ipsum lorem ipsum 2
		lorem ipsum lorem ipsum lorem ipsum lorem ipsum 3
`;
		expect(lines(text)).toEqual([
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 1",
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 2",
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 3",
		]);
	});

	test("linesIter", () => {
		const text = `
		lorem ipsum lorem ipsum lorem ipsum lorem ipsum 1
		lorem ipsum lorem ipsum lorem ipsum lorem ipsum 2
		lorem ipsum lorem ipsum lorem ipsum lorem ipsum 3
`;

		expect([...linesIter(text)]).toEqual([
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 1",
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 2",
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 3",
		]);
	});

	test("unLines", () => {
		const lines = [
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 1",
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 2",
			"\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 3",
		];

		expect(unLines(lines))
			.toBe(`\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 1
\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 2
\t\tlorem ipsum lorem ipsum lorem ipsum lorem ipsum 3`);
	});
});
