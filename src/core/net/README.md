# @core/net

Данный модуль предоставляет API для работы с сетью: проверка сетевого соединения с возможностью повторных
амортизированных запросов и т.д).

## Использование:

При подключении к сети:

```typescript
import isOnline from "~core/net/engines/browser";

const online = isOnline();

online
   .then((data) => {
      // вызовется
      console.log(data);

   })
   .catch((err) => {
      // не вызовется
      console.log(err);
   });
```

Бещ подключении к сети:

```typescript
online
   .then((data) => {
      // вызовется
      console.log(`data: `, data);

   })
   .catch((err) => {
      // вызовется
      console.log(`err: `, err);
   });
```
