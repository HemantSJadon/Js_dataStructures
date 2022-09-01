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
    const numbers = [2, 2, 3];
    console.log(`checking whether the target sum of ${target} can be achieved by adding following numbers in any order any number of times ..
    ${numbers}`)
    console.time("canSum");
    console.log(canSum(target, numbers));
    console.timeEnd("canSum");

    // console.time("canSum_optimised");
    // console.log(canSum_optimised(target, numbers));
    // console.timeEnd("canSum_optimised");
}

//complexity analysis: the entire array will need to be traversed once
//at each index, m constant time ops where m = length of numbers array
//time complexity: O(n*m), n = target sum
//space complexity: O(n) array space

const canSum = function (targetSum, numbers) {
    const canSumArray = new Array(targetSum + 1).fill(false);
    canSumArray[0] = true;
    for (var i = 0; i <= targetSum; i++) {
        if (canSumArray[i]) {
            numbers.forEach(n => {
                if (i + n <= targetSum) canSumArray[i + n] = true;
            })
        }
    }
    return canSumArray[targetSum];
}

test1();