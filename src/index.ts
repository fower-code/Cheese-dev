import range from "~core/range";
import Iter from "~core/iter";
import {createIterThread, executorIterThread} from "~core/iter/green-thread";

const r = range(1, 4000);

const threads = createIterThread(r, 4);
console.log(threads);

executorIterThread(threads, (chunk) => {
	console.log(chunk);
});

