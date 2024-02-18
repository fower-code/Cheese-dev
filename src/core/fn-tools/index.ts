export function debounce(fn: Function, timeout: number) {
	return function (...args: unknown[]) {
		return setTimeout(() => {
			fn(...args);
		}, timeout);
	};
}

export function throttle(fn: Function){

}
