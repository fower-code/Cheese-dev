# core/queue/simple

Этот модуль предоставляет класс Очереди.

## Использование

```typescript
import {Queue} from "~core/queue";

const queue = new Queue();

queue.insert(40);
queue.insert(30);
queue.insert(20);
queue.insert(10);

// 40
console.log(queue.remove());

// [10, 20, 30]
console.log([...queue]);
```

## API

### Поддержка Iterable API

При создании очереди, в него можно передать iterable-сущность:

```typescript
const queue = new Queue([10, 20, 30]);

// [30, 20, 10]
console.log([...queue]);
```
