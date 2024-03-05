import {debounce, throttle} from "~core/fn-tools";

function laugh(int: number) {
	console.log(int);
}

// const laughDebounce = debounce(laugh, 1);
//
// laughDebounce(10);
// laughDebounce(20);
// laughDebounce(30);
// setTimeout(( )=> {
// 	laughDebounce(40);
//
// },1000);

const laughThrottle = throttle(laugh, 300);

laughThrottle(10);
laughThrottle(20);
laughThrottle(30);

// setTimeout(()=> {
// 	laughThrottle(40);
// }, 5000)



