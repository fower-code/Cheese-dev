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

import {lines, unLines, unWords, words} from "~core/text";

let
	s1 = `\ntext1\ntext2\ntext3\ntext4`,
	s2 = `abc`

// let
// 	l = lines(s2);
//
// console.log(l);

let
	s3 = "i love rust";

let
	s4 = `В уроке 22 вкратце упоминалась функция splitOn, её версия для строк
определена в модуле Data.List.Split. К счастью, версия для Text уже
имеется в Data.Text и дополнительных импортов не нужно. Функция
splitOn позволяет разделять текст по любой его подстроке.`

// let w = words(s4);
// let s5 = unWords(w);
let
	l = lines(s4);
let
	s6 = unLines(l);

console.log(l);

console.log(s4);
console.log(s6);

