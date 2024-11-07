# core/symbol

Этот модуль предобавляет API для более гипкого создания символов.

# Пример:

```js
import symbolGenerator from "~core/symbol";

// При обращении к $$ будет сгенерирован символ.
const $$ = symbolGenerator();

console.log($$.foo);

// Стандарный способ создания символов.
// (эти два способа одинаковы, но способ выше более гибкий).
const bar = Symbol("foo");

console.log(bar);
```
