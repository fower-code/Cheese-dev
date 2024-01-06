import "@assets/style/main.css";
import CacheData, {LRUCache} from "@core/cache-data";

const cacheData = new CacheData({
	strategy: new LRUCache(),
});

cacheData.set("num", 10);

