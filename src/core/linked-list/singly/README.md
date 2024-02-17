# ~core/linked-list/singly

Этот модуль предоставляет класс для одностороннего списка.

## Использование:

```typescript
import {LinkedList} from "~core/linked-list/singly";

const list: LinkedList<number> = new LinkedList();
list.insertFirst(30);
list.insertFirst(20);
list.insertFirst(10);
list.insertFirst(0);
list.removeFirst();

for (const val of list) {
   console.log(val.data);
}

// 10, 20, 30
```

## API

### insertFirst

Добавляет элемент в начало списка:

```typescript
import {LinkedList} from "~core/linked-list/singly";

const list: LinkedList<number> = new LinkedList();

list.insertFirst(10);
```

### removeFirst

Удаляет элемент из начала списка, при этом возвращает значение элемента:

```typescript
import {LinkedList} from "~core/linked-list/singly";

const list: LinkedList<number> = new LinkedList();
list.insertFirst(20);

// 20
console.log(list.removeFirst());
```

### clear

Очищает список:

```typescript
import {LinkedList} from "~core/linked-list/singly";

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
import {LinkedList} from "~core/linked-list/singly";

const list: LinkedList<number> = new LinkedList();

// true
console.log(list.isEmpty());

list.insertFirst(30);

// false
console.log(list.isEmpty());
```
