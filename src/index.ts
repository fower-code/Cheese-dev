import EventEmitter, {streamEvent} from "~core/event";

function foo1(v: unknown) {
	console.log(`foo1: `, v);
}

function foo2(v: unknown) {
	console.log(`foo2: `, v);
}

function foo3(v: unknown) {
	console.log(`foo3: `, v);
}

const ev1: EventEmitter<number> = new EventEmitter();
// ev1.on("click", foo1);
// // ev1.on("click", foo2);
// ev1.once("click", foo2);
// ev1.on("click", foo3);
// // ev1.off("click", foo1);
// // ev1.off("close");
// // console.log(ev1.handlers);
// ev1.emit("click", 1);
// ev1.emit("click", 2);

(async () => {
	for await (const ev of streamEvent<number>(ev1, "input")) {
		console.log(ev); // 1 2 3
	}
})();

ev1.emit("input", 1);
ev1.emit("input", 2);
ev1.emit("input", 3);
