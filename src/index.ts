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

const a1 = [1, 2, 3, 4, 5];

const iter1 = new Iter(a1);
// console.log([...iter1]);
// iter1.map((v) => v * 2);
// console.log([...iter1].filter((v) => v>2));
// iter1.filter((v) => v > 2);
const iter2 = iter1.map((v) => v * 2).filter((v) => v > 2).enumerate();
// console.log([...iter1.filter((v) => v > 2)]);
console.log([...iter2]);

