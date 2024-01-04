import "@assets/style/main.css";
import {Option, Result} from "@core/err";

// Данных нет
const data1 = new Result(new Error('Foo!'));

console.log(data1.isError); // true

try {
	data1.unwrap();

} catch (err) {
	console.log(err);
}

data1
	.then(console.log) // Не вызовется
	.catch((err) => `${err} больше не ошибка`)
	.then(console.log) // Foo! больше не ошибка
