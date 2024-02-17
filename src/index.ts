// import "~assets/style/main.css";

// import CacheData from "~core/cache-data";
//
// const cacheData = new CacheData();

import Stack from "~core/stack";

export * as HCCache from '~core/cache-data';
export * as HCStack from '~core/stack';
export * as HCLogger from '~core/logger';
export * as HCLinkedList from '~core/linked-list/double';
export * as HCErr from '~core/err';

console.log(10);

const stack = new Stack();
stack.insert(10);
stack.insert(20);
stack.insert(30);
console.log([...stack]);
