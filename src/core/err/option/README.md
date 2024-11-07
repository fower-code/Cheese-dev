# ~core/err/option

Option представляет обертку над данными, которых может не быть.

## Использование:

```typescript
import { Option } from "~core/err";

// Данных нет
const data1 = new Option<string>(Option.None);

console.log(data1.isNone); // true

try {
   data1.unwrap();
} catch (err) {
   // выведется
   console.log("Данных нет");
}

data1
   .then((v) => {
      // Не выведется
      console.log(v);
      return v;
   })
   .or(new Option("Данные есть"))
   .then((v) => {
      // Данные есть
      console.log(v);
      return v;
   });
```

## API

**isNone** - возвращает true, если данных нет, и false в обратном случае.

**unwrap** - Возвращает данные, либо кидает исключение (данных нет).

**then** - принимает callback, и выполняет его в том случае, если данные есть.

**or** - принимает новый объект Option и возвращает его, если данные None.
