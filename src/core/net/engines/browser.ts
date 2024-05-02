import {defaultConfigNet} from "~core/net/config";

export default async function isOnline(): Promise<boolean | null> {
	if (
		defaultConfigNet.checkUrl == null ||
		defaultConfigNet.checkUrl === ''
	) {
		return null;
	}

	const
		url = defaultConfigNet.checkUrl;

	return new Promise((resolve, reject) => {
		let
			retryCount = 0;

		let
			timer: ReturnType<typeof setTimeout>,
			timeout = false;

		if (defaultConfigNet.checkInterval == null) {
			return;
		}

		const
			checkInterval = defaultConfigNet.checkInterval;

		checkOnline();

		function checkOnline() {
			fetch(url, {
				mode: "no-cors"
			})
				.then((data) => {
					if (timer != null) {
						clearTimeout(timer);
					}
					resolve(true);

				})
				.catch((err) => {
					retry();
				});
		}

		function retry() {
			if (
				defaultConfigNet.retryCount == null ||
				++retryCount >= defaultConfigNet.retryCount
			) {
				reject(false);

			} else {
				timer = setTimeout(() => {
					clearTimeout(timer);
					checkOnline();
				}, checkInterval);
			}
		}
	});
};
