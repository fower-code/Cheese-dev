import {Option} from "~core/err";

// Данных нет
// const data1 = new Option(Option.None);
const data1 = new Option(null);

console.log(data1.isNone); // true

try {
	data1.unwrap();

} catch (err) {
	console.log('Данных нет');
}

data1
	.then(console.log) // Не вызовется
	.or(new Option('Данные есть'))
	.then(console.log) // Данные есть
