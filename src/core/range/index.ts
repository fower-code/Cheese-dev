export default function range(start: number, end: number) {
	let
		i = start;

	// while (i < end) {
	//
	// }

	return {
		next() {
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
		},

		[Symbol.iterator]() {
			return this;
		}
	}
};
