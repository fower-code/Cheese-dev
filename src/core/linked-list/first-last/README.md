# ~core/linked-list/first-last

Этот модуль предоставляет класс для двустороннего списка.

## Использование:

```typescript
import { FirstLastList } from "~core/linked-list";

const list: FirstLastList<number> = new FirstLastList();

list.insertFirst(10);
list.clear();
list.insertLast(20);
list.insertFirst(10);
list.insertLast(30);
list.insertFirst(0);
list.insertFirst(-5);
list.removeFirst();
list.insertFirst(-10);

// -10, 0, 10, 20, 30
for (const val of list) {
   console.log(val);
}
```

## API

### Поддержка Iterable API

При создании списка, в него можно передать iterable-сущность:

```typescript
import { FirstLastList } from "~core/linked-list";

const list: FirstLastList<number> = new FirstLastList([30, 20, 10]);

// 10
console.log(list.first);

// 3
console.log(list.length);
```

Так же сам список является iterable-сущностью:

```typescript
import { FirstLastList } from "~core/linked-list";

const list: FirstLastList<number> = new FirstLastList([30, 20, 20, 10]);

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
import { FirstLastList } from "~core/linked-list";

const list: FirstLastList<number> = new FirstLastList();

list.insertLast(30);
list.insertFirst(20);
list.insertFirst(10);

// 10
console.log(list.first);

list.clear();

// null
console.log(list.first);
```

### last

Возвращает последний узел списка. Если первого узла нет, возвращает null

```typescript
import { FirstLastList } from "~core/linked-list";

const list: FirstLastList<number> = new FirstLastList();

list.insertLast(30);
list.insertFirst(20);
list.insertFirst(10);

// 30
console.log(list.last);

list.clear();

// null
console.log(list.last);
```

### length

Возвращает длину списка.

```typescript
import { FirstLastList } from "~core/linked-list";

const list: FirstLastList<number> = new FirstLastList();

list.insertLast(30);
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
import { FirstLastList } from "~core/linked-list";

const list: FirstLastList<number> = new FirstLastList();

list.insertFirst(30);
list.insertFirst(20);
list.insertFirst(10);

// 10, 20, 30
for (const val of list) {
   console.log(val);
}
```

### removeFirst

Удаляет элемент из начала списка, при этом возвращает значение элемента:

```typescript
import { FirstLastList } from "~core/linked-list";

const list: FirstLastList<number> = new FirstLastList();

list.insertFirst(10);

// 10
console.log(list.removeFirst());
```

### insertLast

Вставляет элемент в конец списка:

```typescript
import { FirstLastList } from "~core/linked-list";

const list: FirstLastList<number> = new FirstLastList();

list.insertLast(10);
list.insertLast(20);
list.insertLast(30);

// 10, 20, 30
for (const val of list) {
   console.log(val);
}
```

### reverse

Разворачивает список:

```typescript
import { FirstLastList } from "~core/linked-list";

const list = new FirstLastList();

list.insertLast(30);
list.insertFirst(20);
list.insertFirst(10);

// 10
console.log(list.first);
// 30
console.log(list.last);

list.reverse();
console.log("reverse:");

// 30
console.log(list.first);
// 10
console.log(list.last);
```

### clear

Очищает список:

```typescript
import { FirstLastList } from "~core/linked-list";

const list = new FirstLastList();

list.insertLast(30);
list.insertFirst(20);
list.insertFirst(10);

list.clear();

// null
console.log(list.first);
```

### isEmpty

Возвращает true, если список пустой и false в обратном случае:

```typescript
import { FirstLastList } from "~core/linked-list";

const list = new FirstLastList();

list.insertLast(30);
list.insertFirst(20);
list.insertFirst(10);

// false
console.log(list.isEmpty());

list.clear();

// true
console.log(list.isEmpty());
```
