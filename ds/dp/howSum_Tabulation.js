/*Problem: 
Write a function 'howSum(targetSum, numbers)' that takes in a
targetSum and an array of numbers as arguments.

The function should return an array containing any combination of
elements that add up to exactly the targetSum. If there is no
combination that adds up to the targetSum, then return null.

If there are multiple combinations possible, you may return any
single one.
*/

const test1 = () => {
    const targetSum = 9;
    const numbers = [3,2];//[3,2,4,5]
    console.log(`checking how the target sum of ${targetSum} is achieved from adding following numbers in any combo...
    ${numbers}`);

    console.time("howSum");
    console.log("here is one combo:", howSum(targetSum, numbers))
    console.timeEnd("howSum");
}

const test2 = () => {
    const targetSum = 200;
    const numbers = [7,15];
    console.log(`checking how the target sum of ${targetSum} is achieved from adding following numbers in any combo...
    ${numbers}`);

    console.time("howSum");
    console.log("here is one combo:", howSum(targetSum, numbers))
    console.timeEnd("howSum");
}

//each index of array is traversed once
//at each index m operation , each operation may include copying of an array
//time complexity: O(n*m *n) > O(m*n^2)
//space: O(n * n) > O(n^2) worst case , polynomial complexity
const howSum = function (targetSum, numbers) {
    const canSumArray = new Array(targetSum).fill(null);
    canSumArray[0] = [];
    for (var i = 0; i <= targetSum; i++) {
        if (canSumArray[i]) {
            numbers.forEach(n => {
                if (i + n <= targetSum && !canSumArray[i + n]) {
                    canSumArray[i+n] = [...canSumArray[i], n];
                }
            });
        }
    }
    return canSumArray[targetSum];
}
// test1();
test2();