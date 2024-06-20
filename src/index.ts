import {Queue} from "~core/queue";
import Deque from "~core/queue/deque";

const deque = new Deque([10, 20, 30]);
// const deque = new Deque();

// deque.insertFirst(30);
// deque.insertFirst(20);
// deque.insertFirst(10);
// deque.insertFirst(0);
// deque.insertLast(40);

// 0
// console.log(deque.removeFirst());

// 40
// console.log(deque.removeLast());

// [10, 20, 30]
console.log([...deque]);
