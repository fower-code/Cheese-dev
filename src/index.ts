import "@assets/style/main.css";
import {Option} from "@core/err";

const data1 = new Option(Option.None);

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
