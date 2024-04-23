import Iter from "~core/iter";

const a1 = [1, 2, 3, 4, 5];

const iter1 = new Iter(a1);
const iter2 = iter1.repeat(3);
console.log([...iter2.take(7)]);

// const iter3 = new Iter([]).zip(new Set([1, 2]), ['a', 'b', 'z'], '...');
// console.log([...iter3]);
