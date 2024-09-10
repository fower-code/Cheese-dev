import {watch} from "~core/object";

function handler<T>(value:T, old:T, p: unknown[]) {
	console.log("Called handler");
	console.log("newVal: ", value);
	console.log("oldVal: ", old);
	console.log(p);
}

const obj = {
	a: 1,
	b: 2,
   c: new Map(),
	d: {e: 1},
}

const watcher = watch(obj, handler);

// Вызовется handler
watcher.a = 2;
// Вызовется handler
console.log(watcher.c);
watcher.c.set("s", 4);
// Вызовется handler
watcher.d.e = 5;

// watcher.set("simple", 3);
// watcher.set("data", {a: 1, b: 2});
// const v = watcher.get("data");
// v.a = 3;
