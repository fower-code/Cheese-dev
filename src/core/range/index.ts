export function range(
	start: number,
	end?: number,
): IterableIterator<number> {
	let i = start;

	if (end) {
		return {
			next() {
				if (i <= end) {
					return {
						value: i++,
						done: false,
					};
				}

				return {
					value: null,
					done: true,
				};
			},

			[Symbol.iterator]() {
				return this;
			},
		};
	}

	return {
		next() {
			return {
				value: i++,
				done: false,
			};
		},

		[Symbol.iterator]() {
			return this;
		},
	};
}
