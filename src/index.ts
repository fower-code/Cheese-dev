import "~assets/style/main.css";
import esbuildApiInit from "./esbuild-api";
import {lines, linesIter, unLines, unWords, words, wordsIter} from "~core/text";

esbuildApiInit();

const text =
	"lorem ipsum lorem ipsum lorem ipsum lorem ipsum 1\n" +
	"lorem ipsum lorem ipsum lorem ipsum lorem ipsum 2\n" +
	"lorem ipsum lorem ipsum lorem ipsum lorem ipsum 3";

// [
// 	'lorem ipsum lorem ipsum lorem ipsum lorem ipsum 1',
// 	'lorem ipsum lorem ipsum lorem ipsum lorem ipsum 2',
// 	'lorem ipsum lorem ipsum lorem ipsum lorem ipsum 3'
// ]
console.log(lines(text));
