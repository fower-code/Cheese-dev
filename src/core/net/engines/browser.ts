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

	return new Promise((resolve) => {
		let
			retryCount = 0;

		let
			timer: ReturnType<typeof setTimeout> | null,
			timeout = false;
		console.log(defaultConfigNet.checkInterval);
		if (defaultConfigNet.checkInterval != null) {
			timer = setTimeout(() => {
				timeout = true;
				resolve(false);
			}, defaultConfigNet.checkInterval);
		}

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
				++retryCount > defaultConfigNet.retryCount
			) {
				resolve(false);

			} else {
				checkOnline();
			}
		}
	});
};
