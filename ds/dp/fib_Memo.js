//Problem: write a function that takes an integer n as input and returns the nth element of fibonacci series
//the first and second element of the fib series are both 1
//any element is the summation of last 2


// this seemingly simple solution converts to a tree for which every node is traversed. With 1 increment in n, the tree doubles in size
//exponentials time complexity: O(2^n) , at any point the call stack will only have maximum n functional call (a complete tree branch from n to 1)
// space: O(n)
const fib = function(n) {
    if(n <= 2) return 1;
    return fib(n-2) + fib (n-1);
}
const n = 46;// don't go above 46 for this non-optimised way , takes almost a minute then
console.log(`measuring execution time to get ${n}th term of fibonacci series...`);
console.time("start");
console.log(fib(n));
console.timeEnd("start");


// This optimised solution used a map. Every time the value at any n is calculated first time, it's saved in map.
// all further occurences used a constant lookup, so basically tree is traversed once from n to 1 and then constant lookup is used.
//Linear time complexity time: O(n),  
// space : call Stack + Map , at any point the call stack will only have maximum n functional call (a complete tree branch from n to 1)
// space: O(n) + O(n) ~ O(n) , Map can store max n key value pairs so linear space
const fib_optimised = function(n, alreadyCalculated = new Map()){
    if(n <= 2) return 1;
    if(alreadyCalculated.has(n)) return alreadyCalculated.get(n);
    const sum = fib_optimised(n-2,alreadyCalculated ) + fib_optimised(n-1,alreadyCalculated);
    alreadyCalculated.set(n, sum);
    return sum;
}

// const m = 45;

console.log(`measuring optimised execution time to get ${n}th term of fibonacci series...`);
console.time("start_op");
console.log(fib_optimised(n));
console.timeEnd("start_op");


