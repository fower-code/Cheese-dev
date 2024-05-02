import isOnline from "~core/net/engines/browser";

const online = isOnline();

online
	.then((data) => {
		// вызовется
		console.log(`data: `, data);

	})
	.catch((err) => {
		// вызовется
		console.log(`err: `, err);
	});
