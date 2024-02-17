# ~core/stack

Этот модуль предоставляет класс для создания Стека.

## Использование:

```typescript
import Stack from "~core/stack";

const stack = new Stack();

stack.insert(10);
stack.insert(20);
stack.insert(30);

// 30
console.log(stack.remove());
```

## API

### insert

Добавляет элемент в стек:

```typescript
import Stack from "~core/stack";

const stack = new Stack();

stack.insert(10);
stack.insert(20);
stack.insert(30);

// 30, 20, 10
for (const el of stack) {
   console.log(el.data);
}
```

### remove

Удаляет элемент из стека, при этом возвращает его значение:

```typescript
import Stack from "~core/stack";

const stack = new Stack();

stack.insert(10);
stack.insert(20);
stack.insert(30);

console.log(stack.remove());
```

### clear

Очищает стек:

```typescript
import Stack from "~core/stack";

const stack = new Stack();

stack.insert(10);
stack.insert(20);
stack.insert(30);

stack.clear();

// null
console.log(stack.remove());
```

### isEmpty

Возвращает true, если стек пустой:

```typescript
import Stack from "~core/stack";

const stack = new Stack();

stack.insert(10);
stack.insert(20);
stack.insert(30);

// false
console.log(stack.isEmpty());

stack.clear();

// true
console.log(stack.isEmpty());
```
