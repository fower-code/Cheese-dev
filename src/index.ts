import range from "~core/range";

// const r = range(1, 101);
const r = range(1, 10000);

function createAsyncIter<T>(iterable: Iterable<T>): AsyncIterableIterator<T> {
	const iter = iterable[Symbol.iterator]();

	return {
		next() {
			const res = iter.next();
			return Promise.resolve(res);
		},

		[Symbol.asyncIterator]() {
			return this;
		}
	};
}

function createIterThread<T>(iterable: Iterable<T>, countThread: number) {
	const a = [...iterable];

	const
		zip = [];

	const starIndex = Math.floor(a.length / countThread);
	// console.log(starIndex);

	let aTmp: T[] = [];

	for (let i = 0; i < a.length; i++) {
		if (i % starIndex === 0 && i > 0) {
			zip.push(aTmp);
			aTmp = [];
		}

		aTmp.push(a[i]);
		if (i === a.length - 1) {
			zip.push(aTmp);
			aTmp = [];
		}
	}

	return zip;
}

const threads = createIterThread(r, 10);
console.log(threads);
// const startTime = new Date().getTime();
// for (const inA of threads) {
// 	for (const el of inA) {
// 		console.log(el);
// 	}
// }
// startThread(createAsyncIter(threads[0]));
// startThread(createAsyncIter(threads[1]));
// startThread(createAsyncIter(threads[2]));
// startThread(createAsyncIter(threads[3]));
// const endTime = new Date().getTime();
// console.log(
// 	`Processing time: ${(endTime - startTime) / 1000} seconds`
// );

executorIterThread(threads);

async function startThread<T>(a: AsyncIterableIterator<T>) {
	// (async () => {
		for await (const el of a) {
			console.log(el);
		}
	// })();
}

function executorIterThread<T>(a: T[][]) {
	for (const aElement of a) {
		startThread(createAsyncIter(aElement));
	}
}
