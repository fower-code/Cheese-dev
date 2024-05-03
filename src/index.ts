import range from "~core/range";
import {asyncForeach} from "~core/iter/async";

const r = range(1, 10);

function createPromise(n: number) {
	return new Promise((resolve, reject) => {
		let timer = setTimeout(() => {
			resolve(n);
			clearTimeout(timer);

		}, 3000);
	})
}

// function asyncIterPromise<T = Promise<unknown>>(iterable: Iterable<T>) {
// 	const
// 		iter = iterable[Symbol.iterator]();
//
// 	return {
// 		[Symbol.asyncIterator]() {
// 			return this;
// 		},
//
// 		async next() {
// 			const res = iter.next();
//
// 			if (res.value) {
// 				await res.value().then((v: unknown) => {
// 					console.log(v);
// 					return v;
// 				});
// 			}
//
// 			return res;
// 		}
// 	};
// }

const a1 = [
	1,
	2
];

function asyncIterConvertPromise() {

}

(async () => {
	for await (const el of a1) {
		// console.log(el);
		await createPromise(el).then((v) => {
			console.log(v)
		});
	}
})();

// (async () => {
// 	for await (const el of asyncForeach(r, 1, 3000)) {
// 		console.log();
// 	}
// })();
