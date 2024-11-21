import "~assets/style/main.css";
import esbuildApiInit from "./esbuild-api";
import {Range} from "~core/range";

esbuildApiInit();

const r = new Range("a", "c");
console.log([...r]); // ['a', 'b', 'c']

const r2 = new Range(1, 3);
console.log([...r2]); // [1, 2, 3]

for (const n of new Range(1,3)) {
	console.log(n); // Outputs: 1, 2, 3
}

const r4 = new Range(1, "c"); // Uncaught TypeError: Start and end must be of the same type.
