import {enumerate, filter, map, repeat, take} from "~core/iter";

const a = [1, 2, 3, 4, 5];
let iter = map(a, (v,i, iterable) => {
	// console.log(i);
	// console.log(iterable);
	return v * 2;
});
// console.log([...iter]);

// iter = filter(iter, (v, i, iterable) => v % 2 === 0);
// console.log([...iter]);

// console.log([...enumerate(iter)]);
// console.log([...take(iter, 10)]);
console.log([...repeat(iter, 2)]);
// console.log([...repeat([1,2,3], 2)]);
// console.log([...repeat(take([1,2,3,5,6,7], 5), 2)]);

// const iter2 = [...map(map([1,2,3], (v) => v * 2), (v) => v * 3)]
// console.log(iter2)
