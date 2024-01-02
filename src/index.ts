import "@assets/style/main.css";
import {LinkedList} from "@core/linked-list/singly";
import {FirstLastList} from "@core/linked-list/first-last";
import {DoubleLinkedList} from "@core/linked-list/double";

// console.log(20);
const list: LinkedList<number> = new LinkedList();
list.insertFirst(30);
list.insertFirst(20);
list.insertFirst(10);
list.insertFirst(0);

for (const val of list) {
	console.log(val.data);
}

console.log('----------');

const firstLastList = new FirstLastList();
firstLastList.insertFirst(10);
firstLastList.clear();
firstLastList.insertLast(20);
firstLastList.insertFirst(10);
firstLastList.insertLast(30);
firstLastList.insertFirst(0);
firstLastList.insertFirst(-5);
firstLastList.removeFirst();
firstLastList.insertFirst(-10);

for (const val of firstLastList) {
	console.log(val.data)
}

console.log('----------');

const doubleList = new DoubleLinkedList();
doubleList.insertFirst(10);
doubleList.insertFirst(0);
doubleList.insertFirst(-10);
doubleList.insertFirst(-15);
doubleList.insertLast(20);
doubleList.insertLast(25);
doubleList.insertLast(30);
doubleList.removeFirst();

for (const val of doubleList) {
	console.log(val.data)
}
