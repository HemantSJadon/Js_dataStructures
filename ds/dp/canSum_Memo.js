/* Problem: 
Write a function 'canSum(targetSum, numbers)' that takes in a
targetSum and an array of numbers as arguments.

The function should return a boolean indicating whether or not it
is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed.

You may assume that all input numbers are nonnegative.
*/

const test1 = () => {
    const target = 37; //31, 33, 35, 39
    const numbers = [2,2,2];
    console.log(`checking whether the target sum of ${target} can be achieved by adding following numbers in any order any number of times ..
    ${numbers}`)
    console.time("canSum");
    console.log(canSum(target, numbers));
    console.timeEnd("canSum");

    console.time("canSum_optimised");
    console.log(canSum_optimised(target, numbers));
    console.timeEnd("canSum_optimised");
}

// Complexity assessment :let n be the target number, m be the length of numbers array
// worst case will be > when number of possible nodes to be touched is maximum,
//i.e. when each number in numbers array is 1 or smallest possible number which does not result in adding up to the target
//a big prime number and all numbers being 2
// total levels in that case> n, elements at each level: m * element at previous / up level
// time complexity : exponential, O(m^n),
//space : call stack in worst case, O(n)
const canSum = function(targetSum, numbers){
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    for(let num of numbers){
        if(num === 0) continue; // do not make a recursive call on number 0
        if(canSum(targetSum-num, numbers)) return true;
    }
    return false;
}

//in the optimised way, the tree is traversed completely to the bottom only once
// in worst case, the max height of this tree : n, where n is the targetSum
// each node is branch m times, m = length of array
// because of memoisation, we would not have to explore these sub branches/ trees
//time: O(n*,), space: stack + map O(n)
const canSum_optimised = function(targetSum, numbers, alreadyCalculated = new Map()){
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    if(alreadyCalculated.has(targetSum)) return alreadyCalculated.get(targetSum);
    for(let num of numbers){
        if(num === 0) continue; // do not make a recursive call on number 0
        if(canSum_optimised(targetSum-num, numbers, alreadyCalculated)) {
            alreadyCalculated.set(targetSum, true);
            return true;
        };
    }
    alreadyCalculated.set(targetSum, false);
    return false;
}

test1();