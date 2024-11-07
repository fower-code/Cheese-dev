# ~core/linked-list/singly

Этот модуль предоставляет класс для одностороннего списка.

## Использование:

```typescript
import {LinkedList} from "~core/linked-list";

const list: LinkedList<number> = new LinkedList();
list.insertFirst(30);
list.insertFirst(20);
list.insertFirst(10);
list.insertFirst(0);
list.removeFirst();

for (const val of list) {
   // 10, 20, 30
   console.log(val);
}
```

## API

### Поддержка Iterable API

При создании списка, в него можно передать iterable-сущность:

```typescript
import {LinkedList} from "~core/linked-list";

const list: LinkedList<number> = new LinkedList([30, 20, 10]);

// 10
console.log(list.first);

// 3
console.log(list.length);
```

Так же сам список является iterable-сущностью:

```typescript
import {LinkedList} from "~core/linked-list";

const list: LinkedList<number> = new LinkedList([30, 20, 20, 10]);

// 10, 20, 20, 30
for (const val of list) {
	console.log(val);
}

// [10, 20, 20, 30 ]
console.log([...list]);

// Set (3) [10, 20, 30 ]
console.log(new Set([...list]));
```

### first

Возвращает первый узел списка. Если первого узла нет, возвращает null

```typescript
import {LinkedList} from "~core/linked-list";

const list: LinkedList<number> = new LinkedList();

list.insertFirst(30);
list.insertFirst(20);
list.insertFirst(10);

// 10
console.log(list.first);

list.clear();

// null
console.log(list.first);
```

### length

Возвращает длину списка.

```typescript
import {LinkedList} from "~core/linked-list";

const list: LinkedList<number> = new LinkedList();

list.insertFirst(30);
list.insertFirst(20);
list.insertFirst(10);

// 3
console.log(list.length);

list.clear();

// 0
console.log(list.length);
```

### insertFirst

Добавляет элемент в начало списка:

```typescript
import {LinkedList} from "~core/linked-list";

const list: LinkedList<number> = new LinkedList();

list.insertFirst(30);
list.insertFirst(20);
list.insertFirst(10);

for (const val of list) {
   console.log(val);
}

// 10, 20, 30
```

### removeFirst

Удаляет элемент из начала списка, при этом возвращает значение элемента:

```typescript
import {LinkedList} from "~core/linked-list";

const list: LinkedList<number> = new LinkedList();
list.insertFirst(20);

// 20
console.log(list.removeFirst());
```

### reverse

Разворачивает список:

```typescript
import {LinkedList} from "~core/linked-list";

const list: LinkedList<number> = new LinkedList();

list.insertFirst(30)
list.insertFirst(20)
list.insertFirst(10)

// 10, 20, 30
for (const val of list) {
	console.log(val);
}

list.reverse();
console.log('reverse:');

// 30, 20, 10
for (const val of list) {
	console.log(val);
}
```

### clear

Очищает список:

```typescript
import {LinkedList} from "~core/linked-list";

const list: LinkedList<number> = new LinkedList();

list.insertFirst(20);
list.insertFirst(10);

list.clear();

// null
console.log(list.removeFirst());
```

### isEmpty

Возвращает true, если список пустой и false в обратном случае:

```typescript
import {LinkedList} from "~core/linked-list";

const list: LinkedList<number> = new LinkedList();

// true
console.log(list.isEmpty());

list.insertFirst(30);

// false
console.log(list.isEmpty());
```
