import {FirstLastList, LinkedList} from "~core/linked-list";

const list = new FirstLastList([40, 30, 20, 10, 0]);

// list.insertFirst(30)
// list.insertFirst(20)
// list.insertFirst(10);
// list.insertFirst(0);
// list.insertLast(40)
list.removeFirst();
console.log([...list]);
console.log(list.length);
console.log(list.first)
console.log(list.last)
// for (const node of list) {
// 	console.log(node);
// }
