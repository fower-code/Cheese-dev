import "~assets/style/main.css";
import esbuildApiInit from "./esbuild-api";
import {lines, linesIter, unLines, unWords, words, wordsIter} from "~core/text";

esbuildApiInit();

const text = "\n" +
	"lorem ipsum lorem ipsum lorem ipsum lorem ipsum 1\n" +
	"lorem ipsum lorem ipsum lorem ipsum lorem ipsum 2\n" +
	"lorem ipsum lorem ipsum lorem ipsum lorem ipsum 3\n" +
	"";

console.log(lines(text));
