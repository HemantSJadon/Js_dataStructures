/* Problem: 
Write a function 'bestSum(targetSum, numbers)' that takes in a
targetSum and an array of numbers as arguments.

The function should return an array containing the shortest
combination of numbers that add up to exactly the targetSum.

If there is a tie for the shortest combination, you may return
any one of the shortest.
*/

const test1 = () => {
    const targetSum = 9;//7;//;// 56, 51, 55, 22, 1
    const numbers = [3,4,4,4,8,1,9];
    console.log(`getting the shortest combination of numbers that add up to ${targetSum} from below collection...
    ${numbers}`);

    console.time("bestSum");
    console.log("here is the best sum:", bestSum(targetSum, numbers));
    console.timeEnd("bestSum");
}


//each index of the array is traversed once
//while traversing any index, m operation where in each one, an array of worst case length n is copied over
//time complexity: O(n*m*n)> O(m*n^2), where n = targetSum, m = length of the numbers array
//space complexity: O(n*n)> O(n^2)
const bestSum = function (targetSum, numbers) {
    const canSumArray = new Array(targetSum).fill(null);
    canSumArray[0] = [];
    for (var i = 0; i <= targetSum; i++) {
        if (canSumArray[i]) {
            numbers.forEach(n => {
                if (i + n > targetSum) return;
                if(!canSumArray[i + n] || (canSumArray[i].length+1 < canSumArray[i+n].length)) {
                    canSumArray[i+n] = [...canSumArray[i], n];
                }
            });
        }
    }
    return canSumArray[targetSum];
}

test1();

