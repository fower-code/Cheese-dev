# @core/linked-list/double

## Использование:

```typescript
import {DoubleLinkedList} from "@core/linked-list/double";

const doubleList = new DoubleLinkedList();

doubleList.insertFirst(10);
doubleList.insertFirst(0);
doubleList.insertFirst(-15);
doubleList.insertLast(20);
doubleList.insertLast(25);
doubleList.insertLast(30);
doubleList.removeFirst();
doubleList.removeLast();

// 0, 10, 20, 25
for (const val of doubleList) {
   console.log(val.data)
}
```

## API

### insertFirst

Добавляет элемент в начало списка:

```typescript
import {DoubleLinkedList} from "@core/linked-list/double";

const doubleList = new DoubleLinkedList();

doubleList.insertFirst(30);
doubleList.insertFirst(20);
doubleList.insertFirst(10);

// 10, 20, 30
for (const val of doubleList) {
   console.log(val.data)
}
```

### removeFirst

Удаляет элемент из начала списка, при этом возвращает значение элемента:

```typescript
import {DoubleLinkedList} from "@core/linked-list/double";

const doubleList = new DoubleLinkedList();

doubleList.insertFirst(30);
doubleList.insertFirst(20);
doubleList.insertFirst(10);

// 10
console.log(doubleList.removeFirst());
```

### insertLast

Вставляет элемент в конец списка:

```typescript
import {DoubleLinkedList} from "@core/linked-list/double";

const doubleList = new DoubleLinkedList();

doubleList.insertLast(10);
doubleList.insertLast(20);
doubleList.insertLast(30);

// 10, 20, 30
for (const val of doubleList) {
   console.log(val.data)
}
```

### removeLast

Удаляет элемент из конца списка, при этом возвращает значение элемента:

```typescript
import {DoubleLinkedList} from "@core/linked-list/double";

const doubleList = new DoubleLinkedList();

doubleList.insertLast(10);
doubleList.insertLast(20);
doubleList.insertLast(30);

// 10
console.log(doubleList.removeLast());
```

### clear

Очищает список:

```typescript
import {DoubleLinkedList} from "@core/linked-list/double";

const doubleList = new DoubleLinkedList();

doubleList.insertFirst(20);
doubleList.insertFirst(20);
doubleList.insertLast(30);

doubleList.clear();

// null
console.log(doubleList.removeLast());
```

### isEmpty

Возвращает true, если список пустой и false в обратном случае:

```typescript
import {DoubleLinkedList} from "@core/linked-list/double";

const doubleList = new DoubleLinkedList();

doubleList.insertFirst(20);
doubleList.insertFirst(20);
doubleList.insertLast(30);

doubleList.clear();

console.log(doubleList.isEmpty());
```
