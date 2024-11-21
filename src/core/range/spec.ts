import { Range } from "~core/range/index";

describe("core/range", () => {
	test("Range with numbers", () => {
		const range = new Range(1, 3);
		expect([...range]).toEqual([1, 2, 3]);
	});

	test("Range with letters", () => {
		const range = new Range("a", "c");
		expect([...range]).toEqual(["a", "b", "c"]);
	});
});
