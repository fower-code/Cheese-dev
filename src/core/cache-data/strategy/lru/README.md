# ~core/cache-data/engine/lru

Стратегия LRU-кеширования.

## Использование:

```typescript
import CacheData, {LRUCache} from "~core/cache-data";

const cacheData = new CacheData({
   strategy: new LRUCache({
      maxSize: 2,
   })
});

cacheData.set("a", 10);
cacheData.set("b", 20);
cacheData.set("c", 30);

// false
console.log(cacheData.hasKey("a"));

// true
console.log(cacheData.isFull());

cacheData.clear();

// false
console.log(cacheData.isFull());

// true
console.log(cacheData.isEmpty());

cacheData.set("a", 30);

// 30
console.log(cacheData.get("a"));
```

### Объект Опций

```typescript
/**
 * @description Интерфейс опций LRUCache
 */
export interface LRUCacheOptions {
   /**
    * @description Максимальный размер кеша, значение должно быть больше 0.
    * Дефолтное значение maxSize равно 10, это можно изменить в конфиге.
    */
   maxSize?: number;
}
```

Если передать maxSize <= 0, то будет ошибка типа RangeError:

```typescript
import CacheData, {LRUCache} from "~core/cache-data";

const cacheData = new CacheData({
   strategy: new LRUCache({
      maxSize: 0,
   })
});

// Uncaught RangeError: maxSize cache must be greater than 0
```

Если количество добавленных элементов больше maxSize, то самые первые элементы удаляются из кеша:

```typescript
import CacheData, {LRUCache} from "~core/cache-data";

const cacheData = new CacheData({
   strategy: new LRUCache({
      maxSize: 2,
   })
});

cacheData.set("a", 10);
cacheData.set("b", 20);
cacheData.set("c", 30);

// undefined
console.log(cacheData.get("a"));

// 20
console.log(cacheData.get("b"));

// 30
console.log(cacheData.get("c"));
```

## API

### get

Принимает ключ и возвращает значение:

```typescript
import CacheData, {LRUCache} from "~core/cache-data";

const cacheData = new CacheData({
   strategy: new LRUCache({
      maxSize: 2,
   })
});

cacheData.set("a", 10);

// 10
console.log(cacheData.get("a"));
```

### hasKey

Возвращает true, если ключ есть в кеше:

```typescript
import CacheData, {LRUCache} from "~core/cache-data";

const cacheData = new CacheData({
	strategy: new LRUCache({
		maxSize: 2,
	})
});

cacheData.set("a", 10);

// true
console.log(cacheData.hasKey("a"));

// false
console.log(cacheData.hasKey("b"));
```

### set

Сохраняем значение в кеш по ключу:

```typescript
import CacheData, {LRUCache} from "~core/cache-data";

const cacheData = new CacheData({
	strategy: new LRUCache({
		maxSize: 2,
	})
});

cacheData.set("a", 10);

// true
console.log(cacheData.hasKey("a"));
```

### remove

Удаляет значение из кеша по ключу:

```typescript
import CacheData, {LRUCache} from "~core/cache-data";

const cacheData = new CacheData({
	strategy: new LRUCache({
		maxSize: 2,
	})
});

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
import CacheData, {LRUCache} from "~core/cache-data";

const cacheData = new CacheData({
	strategy: new LRUCache({
		maxSize: 2,
	})
});

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
import CacheData, {LRUCache} from "~core/cache-data";

const cacheData = new CacheData({
	strategy: new LRUCache({
		maxSize: 2,
	})
});

cacheData.set("a", 10);

// false
console.log(cacheData.isEmpty());

cacheData.clear();

// true
console.log(cacheData.isEmpty());
```

### isFull

Всегда возвращает true, если кеш пустой, и false в обратном случае:

```typescript
import CacheData, {LRUCache} from "~core/cache-data";

const cacheData = new CacheData({
	strategy: new LRUCache({
		maxSize: 2,
	})
});

cacheData.set("a", 10);
cacheData.set("b", 20);

// true
console.log(cacheData.isFull());

cacheData.clear();

// false
console.log(cacheData.isFull());
```
