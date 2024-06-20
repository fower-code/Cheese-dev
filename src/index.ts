import {Queue} from "~core/queue";

const queue = new Queue([10, 20, 30]);

// [10, 20, 30]
console.log([...queue]);
