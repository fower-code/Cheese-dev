# core/object/watch

Модуль предоставялет API для наблдюения за объектом.

## Использование:

```js
import watch from "~core/object/watch";

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
watcher.c.set("s", 4);
// Вызовется handler
watcher.d.e = 5;
```
