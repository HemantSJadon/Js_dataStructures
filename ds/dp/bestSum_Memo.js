/* Problem: 
Write a function 'bestSum(targetSum, numbers)' that takes in a
targetSum and an array of numbers as arguments.

The function should return an array containing the shortest
combination of numbers that add up to exactly the targetSum.

If there is a tie for the shortest combination, you may return
any one of the shortest.
*/

const test1 = () => {
    const targetSum = 7;//7;//;// 56, 51, 55, 22, 1
    const numbers = [3,4,1];
    console.log(`getting the shortest combination of numbers that add up to ${targetSum} from below collection...
    ${numbers}`);

    console.time("bestSum");
    console.log("here is the best sum:", bestSum(targetSum, numbers));
    console.timeEnd("bestSum");


    console.time("bestSum_optimised");
    console.log("here is the best sum:", bestSum_optimised(targetSum, numbers));
    console.timeEnd("bestSum_optimised");
}

//n = target sum, m = length of numbers array
//worst case: when each element is 1 or something that does not end in a valid combo
// complete tree traversal: exponential
//time: O(n^m) level ^ branches
//space: call stack O(n)
const bestSum = function (targetSum, numbers) {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    let shortest = null;
    for (let num of numbers) {
        const bestSumRemainder = bestSum(targetSum - num, numbers);
        if (bestSumRemainder) {
            const currentCombo =  [...bestSumRemainder, num];
            shortest = !shortest || shortest.length > currentCombo.length ? currentCombo : shortest;
        }
    }
    return shortest;
}

//n = target Sum, m = length of numbers array
//Optimised way, each node/subtree with distinct node is explored only once
// total number of nodes, at each node destructing opertion 
//time: O(n*m * m ) > O(n * m2)
//space: stack + memo O(m2)
const bestSum_optimised = function(targetSum, numbers, alreadyCalculated = new Map()){
    if(alreadyCalculated.has(targetSum)) return alreadyCalculated.get(targetSum);
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    let shortest = null;
    for (let num of numbers) {
        const bestSumRemainder = bestSum(targetSum - num, numbers);
        if (bestSumRemainder) {
            const currentCombo =  [...bestSumRemainder, num];
            shortest = !shortest || shortest.length > currentCombo.length ? currentCombo : shortest;
        }
    }
    alreadyCalculated.set(targetSum, shortest);
    return shortest;
}

test1();

