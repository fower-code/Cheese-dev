// import {Option} from "~core/err";
//
// // Данных нет
// const data1 = new Option<string>(Option.None);
//
// console.log(data1.isNone); // true
//
// try {
// 	data1.unwrap();
//
// } catch (err) {
// 	console.log('Данных нет');
// }
//
// data1
// 	.then((v) => {
// 		// Не вызовется
// 		console.log(v);
// 		return v;
// 	})
// 	.or(new Option("Данные есть"))
// 	.then((v) => {
// 		// Данные есть
// 		console.log(v);
// 		return v;
// 	})

import Iter from "~core/iter";
import range from "~core/range";

const a1 = [1, 2, 3, 4, 5];

const iter1 = new Iter(a1);
// console.log([...iter1]);
// iter1.map((v) => v * 2);
// console.log([...iter1].filter((v) => v>2));
// iter1.filter((v) => v > 2);
const iter2 = iter1.map((v) => v * 2).filter((v) => v > 2).enumerate().take(2);
// console.log([...iter1.filter((v) => v > 2)]);
// console.log([...iter2]);

const r = range(1, 10);
// const r2 = [range(1)]
console.log([...new Iter(r)]);
const t1 = new Date().getTime()
console.log([...new Iter(range(0)).take(100)]);
console.log(new Date().getTime() - t1)

// const t2 = new Date().getTime()
// // console.log(t2);
// console.log(Date())
// let a2 :number[]= [];
//
// for (let i = 0; i < 100000000; i++) {
// 	a2.push(i);
// }
//
// console.log(a2);
// // console.log(Date());
// console.log(new Date().getTime() - t2);
