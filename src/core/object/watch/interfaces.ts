export type WatchHandler<T> = (val: T, old: T, p: CanUndef<unknown>[]) => void;
