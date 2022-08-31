/* Problem:
Say you're a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to 
the bottom-right corner. You may only move down or right.

In how many ways can you travel to the goal on a grid  with dimension m *n  
Write a funtion gridTraveler(m,n) that calculates this.

*/

//Non-optimised way: increasing the row/column by 1 can result in almost doubling the number of operation (draw recursion tree)
// Exponential complexity, time complexity: O(2 ^ m+n)
// space complexity: number of levels in recursion tree : m+n , O(m+n)

const test1 = ()  => {
    const m = 16;
    const n = 16;
    console.log(`calculating the number of ways to cross a ${m} * ${n} size grid from top left to bottom right...
    only allowed moves are either down or right.`);

    console.time("gridTraveler");
    console.log("number of ways:" , gridTraveler(m,n));
    console.timeEnd("gridTraveler");

    console.time("gridTraveler_optimised");
    console.log("number of ways:" ,gridTraveler_optimised(m,n));
    console.timeEnd("gridTraveler_optimised");
}
const test2 = ()  => {
    const m = 17;
    const n = 17;
    console.log(`calculating the number of ways to cross a ${m} * ${n} size grid from top left to bottom right...
    only allowed moves are either down or right.`);

    console.time("gridTraveler");
    console.log("number of ways:" , gridTraveler(m,n));
    console.timeEnd("gridTraveler");

    console.time("gridTraveler_optimised");
    console.log("number of ways:" ,gridTraveler_optimised(m,n));
    console.timeEnd("gridTraveler_optimised");
}

const test3 = ()  => {
    const m = 18;
    const n = 18;
    console.log(`calculating the number of ways to cross a ${m} * ${n} size grid from top left to bottom right...
    only allowed moves are either down or right.`);

    console.time("gridTraveler");
    console.log("number of ways:" , gridTraveler(m,n));
    console.timeEnd("gridTraveler");

    console.time("gridTraveler_optimised");
    console.log("number of ways:" ,gridTraveler_optimised(m,n));
    console.timeEnd("gridTraveler_optimised");
}

const gridTraveler = function(m,n){
    if(m <= 1 || n <=1) return 1;
    return gridTraveler(m,n-1) + gridTraveler(m-1,n); // 1 right move  + 1 down move
}

// The optimised tree is traversed to the bottom only once the very first time,
// how many distinct nodes in the tree: m *n
//linear complexity
//time: O(m*n), space: O(m+n) stack + map
const gridTraveler_optimised = function(m,n, alreadyCalculated = new Map()){
    if(m <= 1 || n <= 1) return 1;
    const pos = `${m}:${n}`;
    if(alreadyCalculated.has(pos)) return alreadyCalculated.get(pos);
    const sum = gridTraveler_optimised(m, n-1, alreadyCalculated) + gridTraveler_optimised(m-1,n,alreadyCalculated);
    alreadyCalculated.set(pos,sum);
    return sum;

}

test1();
test2();
test3();