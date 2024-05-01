import EventEmitter from "~core/event";

function foo1(v: unknown) {
	console.log(`foo1: `, v);
}

function foo2(v: unknown) {
	console.log(`foo2: `, v);
}

function foo3(v: unknown) {
	console.log(`foo3: `, v);
}

const ev1 = new EventEmitter();
// ev1.on("click", foo1);
// // ev1.on("click", foo2);
// ev1.once("click", foo2);
// ev1.on("click", foo3);
// // ev1.off("click", foo1);
// // ev1.off("close");
// // console.log(ev1.handlers);
// ev1.emit("click", 1);
// ev1.emit("click", 2);

// const el = document.getElementById("input");

// if (el) {
// 	console.log(el);
//
// 	(async () => {
// 		for await (const ev of EventEmitter.stream(el, "input", foo1)) {
// 			console.log(33);
// 			// console.log(ev);
// 		}
// 	})();
// }

(async () => {
	for await (const ev of EventEmitter.stream(ev1, "input", foo1)) {
		console.log(33);
		// console.log(ev);
	}
})();

setInterval(() => {
	ev1.emit("input", 1);
}, 5000);
