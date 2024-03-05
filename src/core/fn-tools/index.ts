/**
 * @description Функция, которая принимает функцию и возвращает ее debounce-версию.
 * @param fn
 * @param time
 */
export function debounce(fn: Function, time: number) {
	let
		timeout: CanNull<ReturnType<typeof setTimeout>>;

	return function (this: unknown, ...args: unknown[]) {
		if (timeout != null) {
			clearTimeout(timeout);
		}

		timeout = setTimeout(() => {
			fn.apply(this, args);
			timeout = null;

		}, time);
	}
}

/**
 * @description Функция, которая принимает функцию и возвращает ее throttle-версию.
 * @param fn
 * @param time
 */
export function throttle(fn: Function, time: number) {
	let
		timeout: CanNull<ReturnType<typeof setTimeout>>,
		lastArgs: unknown[] = [];

	return function wrapper(this: unknown, ...args: unknown[]) {
		lastArgs = args;
		// console.log(args);

		if (timeout == null) {
			fn.apply(this, args);

			timeout = setTimeout(() => {
				timeout = null;

				// console.log(lastArgs);
				// console.log(args);
				if (lastArgs !== args) {
					wrapper.apply(this, lastArgs);
				}

			}, time);
		}
	};
}
