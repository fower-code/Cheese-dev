# @core/linked-list/first-last

Этот модуль предоставляет класс для двустороннего списка.

## Использование:

```typescript
import {FirstLastList} from "@core/linked-list/first-last";

const firstLastList = new FirstLastList();

firstLastList.insertFirst(10);
firstLastList.clear();
firstLastList.insertLast(20);
firstLastList.insertFirst(10);
firstLastList.insertLast(30);
firstLastList.insertFirst(0);
firstLastList.insertFirst(-5);
firstLastList.removeFirst();
firstLastList.insertFirst(-10);

for (const val of firstLastList) {
   console.log(val.data)
}

// -10, 0, 10, 20, 30
```

## API

### insertFirst

Добавляет элемент в начало списка:

```typescript
import {FirstLastList} from "@core/linked-list/first-last";

const firstLastList = new FirstLastList();

firstLastList.insertFirst(30);
firstLastList.insertFirst(20);
firstLastList.insertFirst(10);

// 10, 20, 30
for (const val of firstLastList) {
   console.log(val.data)
}
```

### removeFirst

Удаляет элемент из начала списка, при этом возвращает значение элемента:

```typescript
import {FirstLastList} from "@core/linked-list/first-last";

const firstLastList = new FirstLastList();

firstLastList.insertFirst(10);

// 10
console.log(firstLastList.removeFirst());
```

### insertLast

Вставляет элемент в конец списка:

```typescript
import {FirstLastList} from "@core/linked-list/first-last";

const firstLastList = new FirstLastList();

firstLastList.insertLast(10);
firstLastList.insertLast(20);
firstLastList.insertLast(30);

// 10, 20, 30
for (const val of firstLastList) {
   console.log(val.data);
}
```

### clear

Очищает список:

```typescript
import {FirstLastList} from "@core/linked-list/first-last";

const firstLastList = new FirstLastList();

firstLastList.insertLast(30);
firstLastList.insertFirst(20);
firstLastList.insertFirst(10);

firstLastList.clear();

// null
console.log(firstLastList.removeFirst());
```

### isEmpty

Возвращает true, если список пустой и false в обратном случае:

```typescript
import {FirstLastList} from "@core/linked-list/first-last";

const firstLastList = new FirstLastList();

firstLastList.insertLast(30);
firstLastList.insertFirst(20);
firstLastList.insertFirst(10);

firstLastList.clear();

// true
console.log(firstLastList.isEmpty());
```
