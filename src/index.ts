import {DoubleList} from "~core/linked-list";

// const list = new DoubleList([40, 30, 20, 10, 0]);
const list = new DoubleList();

list.insertFirst(30);
list.insertFirst(20);
list.insertFirst(10);
list.insertFirst(0);
list.insertLast(40);
list.removeFirst();
list.removeLast();
list.insertLast(40);
console.log([...list]);
list.removeLast();
list.removeLast();
list.removeFirst();
list.removeFirst();

console.log(list.first);
console.log(list.last);

// console.log(list.length);
// console.log(list.first);
// console.log(list.last);
// for (const node of list) {
// 	console.log(node);
// }
