import "@assets/style/main.css";
import CacheData, {LRUCache} from "@core/cache-data";

const cacheData = new CacheData({
	strategy: new LRUCache()
});

cacheData.set("a", 10);

// false
console.log(cacheData.isFull());

cacheData.clear();

// true
console.log(cacheData.isFull());
