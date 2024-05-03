import range from "~core/range";
import {asyncForeach} from "~core/iter/async";

const r = range(1, 10);

// export async function executeAsyncForeach<T>(asyncIter: AsyncIterable<T>): Promise<void> {
// 	for await (const el of asyncIter) {
//
// 	}
// }

(async () => {
	for await (const el of asyncForeach(r, 1, 3000)) {
		console.log(2)
	}
})();
