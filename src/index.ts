import Iter from "~core/iter";

const a1 = [1, 2, 3, 4, 5];

const iter1 = new Iter(a1);
// console.log([...iter1]);
// iter1.map((v) => v * 2);
// console.log([...iter1].filter((v) => v>2));
// iter1.filter((v) => v > 2);
// const iter2 = iter1.map((v) => v * 2).filter((v) => v > 2).enumerate().take(2);
// console.log([...iter1.filter((v) => v > 2)]);
// console.log([...iter2]);
// console.log(...zip(new Set([1, 2]), ['a', 'b', 'z'], '...')); // [1, 'a', '.'] [2, 'b', '.']
const iter3 = new Iter([]).zip(new Set([1, 2]), ['a', 'b', 'z'], '...');
console.log([...iter3]);


// for (let v of a1) {
// 	v = v * 2;
// }
//
// console.log(a1);
