import {
	enumerate,
	filter,
	map,
	repeat,
	take

} from "~core/iter/index";

describe("core/iter/map", () => {
	test("map [1, 2, 3, 4]", () => {
		const iter = map([1, 2, 3, 4], ((el) => el * 2));
		expect([...iter]).toEqual([2, 4, 6, 8]);
	});

	test("map []", () => {
		const iter = map([], ((el) => el * 2));
		expect([...iter]).toEqual([]);
	});
});

describe("core/iter/filter", () => {
	test("filter [1, 2, 3, 4]", () => {
		const iter = filter([1, 2, 3, 4], ((el) => el % 2 === 0));
		expect([...iter]).toEqual([2, 4]);
	});

	test("filter []", () => {
		const iter = filter([], ((el) => el % 2 === 0));
		expect([...iter]).toEqual([]);
	});
});

describe("core/iter/enumerate", () => {
	test("enumerate [1, 2, 3, 4]", () => {
		const iter = enumerate([1, 2, 3, 4]);
		expect([...iter]).toEqual([[1, 1], [2, 2], [3, 3], [4, 4]]);
	});

	test("enumerate []", () => {
		const iter = enumerate([]);
		expect([...iter]).toEqual([]);
	});
});

describe("core/iter/take", () => {
	test("take [1, 2, 3, 4] 3", () => {
		const iter = take([1, 2, 3, 4], 3);
		expect([...iter]).toEqual([1, 2, 3]);
	});

	test("take [1, 2, 3, 4] 4", () => {
		const iter = take([1, 2, 3, 4], 4);
		expect([...iter]).toEqual([1, 2, 3, 4]);
	});

	test("take [1, 2, 3, 4] 0", () => {
		const iter = take([1, 2, 3, 4], 0);
		expect([...iter]).toEqual([]);
	});
});

describe("core/iter/repeat", () => {
	test("repeat [1, 2, 3, 4] 2", () => {
		const iter = repeat([1, 2, 3, 4], 2);
		expect([...iter]).toEqual([1, 2, 3, 4, 1, 2, 3, 4]);
	});

	test("repeat [1, 2, 3, 4] 0", () => {
		const iter = repeat([1, 2, 3, 4], 0);
		expect([...iter]).toEqual([]);
	});
});
