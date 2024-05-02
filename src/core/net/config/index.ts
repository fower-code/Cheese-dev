import {NetConfig} from "~core/net/config/interface";

// todo переделать, когда сделаю логику с конфигом
export const defaultConfigNet: NetConfig = {
	checkUrl: "https://www.google.com/",
	checkInterval: 3000,
	retryCount: 3,
};
