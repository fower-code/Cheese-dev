# @core/cache-data/strategy/simple

Стратегия простого кеширования.

## Использование

```typescript
import CacheData from "@core/cache-data";

const cacheData = new CacheData();

cacheData.set("a", 10);
cacheData.set("b", 20);

// true
console.log(cacheData.hasKey("a"));

cacheData.remove("a");

// false
console.log(cacheData.hasKey("a"));

cacheData.clear();

// false
console.log(cacheData.hasKey("b"));

// true
console.log(cacheData.isEmpty());
```

## API

### get

Принимает ключ и возвращает значение:

```typescript
import CacheData from "@core/cache-data";

const cacheData = new CacheData();

cacheData.set("a", 10);

// 10
console.log(cacheData.get("a"));
```

### hasKey

Возвращает true, если ключ есть в кеше:

```typescript
import CacheData from "@core/cache-data";

const cacheData = new CacheData();

cacheData.set("a", 10);

// true
console.log(cacheData.hasKey("a"));

// false
console.log(cacheData.hasKey("b"));
```

### set

Сохраняем значение в кеш по ключу:

```typescript
import CacheData from "@core/cache-data";

const cacheData = new CacheData();

cacheData.set("a", 10);

// true
console.log(cacheData.hasKey("a"));
```

### remove

Удаляет значение из кеша по ключу:

```typescript
import CacheData from "@core/cache-data";

const cacheData = new CacheData();

cacheData.set("a", 10);

// true
console.log(cacheData.hasKey("a"));

cacheData.remove("a");

// false
console.log(cacheData.hasKey("a"));
```

### clear

Полностью очищает кеш:

```typescript
import CacheData from "@core/cache-data";

const cacheData = new CacheData();

cacheData.set("a", 10);

// true
console.log(cacheData.hasKey("a"));

cacheData.clear();

// false
console.log(cacheData.hasKey("a"));
```

### isEmpty

Возвращает true, если кеш пуст:

```typescript
import CacheData from "@core/cache-data";

const cacheData = new CacheData();

cacheData.set("a", 10);

// false
console.log(cacheData.isEmpty());

cacheData.clear();

// true
console.log(cacheData.isEmpty());
```

### isFull

Всегда возвращает false, так как в данной стратегии кеширования нет максимального размера кеша.

```typescript
const cacheData = new CacheData();

cacheData.set("a", 10);

// false
console.log(cacheData.isFull());

cacheData.clear();

// true
console.log(cacheData.isFull());
```
