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

import {FirstLastList} from "~core/linked-list";

const list = new FirstLastList();

list.insertLast(30);
list.insertFirst(20);
list.insertFirst(10);

// false
console.log(list.isEmpty());

list.clear();

// true
console.log(list.isEmpty());
