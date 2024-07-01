import {isOnline} from "~core/net";

const successCallback = () => {
	console.log("successCallback");
};

const errorCallback = () => {
	console.log("errorCallback");
};

isOnline(errorCallback, successCallback)
	.then((data) => {
		console.log("success");

	})
	.catch((err) => {
		console.log("err: ", err);
	});
