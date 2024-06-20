# core/queue/deque

Этот модуль предоставляет класс двусторонней очереди.

## Использование

```typescript
import Deque from "~core/queue/deque";

const deque = new Deque();

deque.insertFirst(30);
deque.insertFirst(20);
deque.insertFirst(10);
deque.insertFirst(0);
deque.insertLast(40);

// 0
console.log(deque.removeFirst());

// 40
console.log(deque.removeLast());

// [10, 20, 30]
console.log([...deque]);
```

## API

### Поддержка Iterable API

При создании очереди, в него можно передать iterable-сущность:

```typescript
const deque = new Deque();

// [30, 20, 10]
console.log([...deque]);
```
