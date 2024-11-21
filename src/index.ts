import "~assets/style/main.css";
import esbuildApiInit from "./esbuild-api";
import {Range, range} from "~core/range";

esbuildApiInit();

// // 1, 2, 3, 4, 5
// for (const i of range(1)) {
// 	console.log(i);
//
// 	if (i >= 5) {
// 		break;
// 	}
// }
//
// // 1, 2, 3, 4, 5
// for (const i of range(1, 5)) {
// 	console.log(i);
// }
//
// [1, 2, 3, 4, 5]
// console.log([...range(1, 5)]);

const r = new Range("a", "c");
console.log([...r])
