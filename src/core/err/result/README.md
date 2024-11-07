# Result

Result представляет обёртку над данными, которых могут содержать ошибку. Класс Result соблюдает семантику
thenable-объекта.

## Example

```typescript
// Данных нет
const data1 = new Result(new Error("Foo!"));

console.log(data1.isError); // true

try {
   data1.unwrap();
} catch (err) {
   console.log(err);
}

data1
   .then(console.log) // Не вызовется
   .catch((err) => `${err} больше не ошибка`)
   .then(console.log); // Foo! больше не ошибка
```

## Методы

**isError** - возвращает true, если данные содержат ошибку, и false в обратном случае.

**unwrap** - возвращает данные, или кидает исключение (если есть ошибка).

**then** - принимает callback, и выполняет его в том случае, если нет ошибки.

**catch** - принимает callback, и выполняет callback, если есть ошибка.
