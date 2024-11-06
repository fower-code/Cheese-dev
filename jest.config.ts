import type {Config} from "jest";

const config: Config = {
	rootDir: './',
	projects: ["<rootDir>"],
	testMatch: [
		// '<rootDir>/dist/server/**/*[sS]pec.js',
		"<rootDir>/src/**/*[sS]pec.ts",
		"<rootDir>/src/**/?(*.)+(spec).ts"
	],

	preset: "ts-jest",
	testEnvironment: "node",

	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageProvider: "v8",
};

export default config;
