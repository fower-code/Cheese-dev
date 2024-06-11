import Iter from "~core/iter/index";

// todo Доработать
export function createIterThread<T>(iterable: Iterable<T>, countThread: number) {
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

async function startThread<T>(a: AsyncIterableIterator<T>, callback: (v: T) => void) {
	for await (const el of a) {
		callback(el);
	}
}

export function executorIterThread<T>(a: T[][], callback: (v: T) => void) {
	for (const thread of a) {
		const asyncIter = new Iter(thread);
		// startThread(createAsyncIter(thread));
		startThread(asyncIter[Symbol.asyncIterator](), callback);
	}
}
