import range from "~core/range";
import {asyncForeach} from "~core/iter/async";

const r = range(1, 10);

function createPromise() {
	return new Promise((resolve, reject) => {
		let timer = setTimeout(() => {
			resolve(1);
			clearTimeout(timer);

		}, 3000);
	})
}

function asyncIterPromise<T = Promise<unknown>>(iterable: Iterable<T>) {
	const
		iter = iterable[Symbol.iterator]();

	return {
		[Symbol.asyncIterator]() {
			return this;
		},

		async next() {
			const res = iter.next();

			if (res.value) {
				await res.value().then((v: unknown) => {
					console.log(v);
					return v;
				});
			}

			return res;
		}
	};
}

const a1 = [
	createPromise,
	createPromise,
];

(async () => {
	for await (const el of asyncIterPromise(a1)) {
		console.log(el);
	}
})();

// (async () => {
// 	for await (const el of asyncForeach(r, 1, 3000)) {
// 		console.log();
// 	}
// })();
