export default function range(start: number, end?: number):IterableIterator<number> {
	let
		i = start;

	return {
		next() {
			if (end) {
				if (i <= end) {
					return {
						value: i++,
						done: false
					}
				}

				return {
					value: null,
					done: true
				}
			}

			return {
				value: i++,
				done: false,
			}
		},

		[Symbol.iterator]() {
			return this;
		}
	}
};
