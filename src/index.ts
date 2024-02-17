// import {LinkedList} from "~core/linked-list";
//
// // export * as HCCache from '~core/cache-data';
// // export * as HCStack from '~core/stack';
// // export * as HCLogger from '~core/logger';
// // export * as HCLinkedList from '~core/linked-list';
// // export * as HCErr from '~core/err';
//
// const list = new LinkedList();
// // const list = new LinkedList([1,2,3]);
// list.insertFirst(10);
// list.insertFirst(20);
// list.insertFirst(30);
// console.log([...list]);

import {LinkedList} from "~core/linked-list";

const list: LinkedList<number> = new LinkedList([30, 20, 20, 10]);

// 10, 20, 20, 30
for (const val of list) {
	console.log(val);
}

// [10, 20, 20, 30 ]
console.log([...list]);

// Set (3) [10, 20, 30 ]
console.log(new Set([...list]));
