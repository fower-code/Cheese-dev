export {
	default as CacheData,
	SimpleCache,
	LRUCache,
	type CacheOptions,
	type CacheStrategy,
} from "~core/cache-data";

export { Option, Result } from "~core/err";

export { default as EventEmitter, streamEvent } from "~core/event";

export { debounce, throttle } from "~core/fn-tools";

export {
	map,
	filter,
	enumerate,
	take,
	repeat,
	asyncForeach,
	iterInterval,
} from "~core/iter";

export { LinkedList, FirstLastList, DoubleList } from "~core/linked-list";

export {
	default as Logger,
	ConsoleEngine,
	type LoggerOpts,
	type LoggerEngine,
} from "~core/logger";

export { watch, type WatchHandler } from "~core/object";

export { Queue, Deque } from "~core/queue";

export { Range } from "~core/range";

export { default as Stack } from "~core/stack";

export { default as symbolGenerator } from "~core/symbol";

export {
	lines,
	linesIter,
	unLines,
	words,
	wordsIter,
	unWords,
} from "~core/text";
