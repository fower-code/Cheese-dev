import "@assets/style/main.css";
import CacheData, {LRUCache} from "@core/cache-data";

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
