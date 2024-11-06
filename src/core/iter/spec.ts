import {map} from "~core/iter/index";

describe("core/iter", () => {
	test("map [1, 2, 3, 4]", () => {
		const iter = map([1, 2, 3, 4], ((el) => el * 2));
		expect([...iter]).toEqual([2, 4, 6, 8]);
	});

	test("map []", () => {
		const iter = map([], ((el) => el * 2));
		expect([...iter]).toEqual([]);
	});
});
