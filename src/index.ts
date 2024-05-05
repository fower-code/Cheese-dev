import range from "~core/range";
import {asyncForeach} from "~core/iter";

const r = range(1, 100);

(async () => {
	for await (const el of asyncForeach(r, 1, 3000)) {
		console.log(el);
	}
})();
