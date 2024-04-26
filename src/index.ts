import Iter from "~core/iter";

const a1 = [1, 2, 3, 4, 5];

// const iter1 = new Iter(a1);
// const iter2 = iter1.repeat(3);
// console.log([...iter2.take(7)]);

// const iter3 = new Iter([]).zip(new Set([1, 2]), ['a', 'b', 'z'], '...');
// console.log([...iter3]);

const aIter1 = new Iter(a1).map((v) => v * 2);

(async () => {
	// for await (const e of EventEmitter2.stream($input, 'input', cb1)) {
	// 	console.log(e);
	// }
	console.log(22);
	for await (const e of aIter1) {
		console.log(e);
	}
	console.log(33);
})();
