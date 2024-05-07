import {LinkedList} from "~core/linked-list";

const list = new LinkedList();

list.insertFirst(30)
list.insertFirst(20)
list.insertFirst(10);
list.insertFirst(0);
list.removeFirst();
console.log([...list]);
// console.log(list.length);

// for (const node of list) {
// 	console.log(node);
// }
