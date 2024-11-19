import "~assets/style/main.css";
import {enumerate, filter, map, repeat, take} from "~core/iter";
import esbuildApiInit from "./esbuild-api";
import {linesIter} from "~core/text";

esbuildApiInit();

// const text1 = `
// 	lorem ipsum lorem ipsum lorem ipsum lorem ipsum
// 	lorem ipsum lorem ipsum lorem ipsum lorem ipsum
// 	lorem ipsum lorem ipsum lorem ipsum lorem ipsum
// `;
//
// console.log([...linesIter(text1)]);
