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

import {lines, words} from "~core/text";

let
	s1 = `\ntext1\ntext2\ntext3\ntext4`,
	s2 = `abc`

let
	l = lines(s2);

console.log(l);

// let
// 	s3 = "i love rust";
//
// let
// 	w = words(s3);
//
// console.log(w);

