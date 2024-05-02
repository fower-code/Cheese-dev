import isOnline from "~core/net/engines/browser";

const online = isOnline();

online
	.then((data) => {
			console.log(`data: `, data);
			return data;
		},
	)
	.catch((err) => {
		console.log(`err: `, err);
	});
