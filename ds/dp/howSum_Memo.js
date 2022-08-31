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
    const targetSum = 37;
    const numbers = [2,2,2];
    console.log(`checking how the target sum of ${targetSum} is achieved from adding following numbers in any combo...
    ${numbers}`);

    console.time("howSum");
    console.log("here is one combo:", howSum(targetSum, numbers))
    console.timeEnd("howSum");

    console.time("howSum_optimised");
    console.log("here is one combo:", howSum_optimised(targetSum, numbers))
    console.timeEnd("howSum_optimised");
}

const test2 = () => {
    const targetSum = 8;
    const numbers = [2,3,5];
    console.log(`checking how the target sum of ${targetSum} is achieved from adding following numbers in any combo...
    ${numbers}`);

    console.time("howSum");
    console.log("here is one combo:", howSum(targetSum, numbers))
    console.timeEnd("howSum");

    console.time("howSum_optimised");
    console.log("here is one combo:", howSum_optimised2(targetSum, numbers))
    console.timeEnd("howSum_optimised");
}


// n = target sum, m = length of the array
//worst case: all numbers are 1
//exponential time complexity
//time complexity: O(m^n), space complexity: O(n) stack
const howSum = function(targetSum, numbers, prevNum = null){
    if(targetSum === 0) return [prevNum];
    if(targetSum < 0) return null;
    for(let num of numbers){
        const sumCombo = howSum(targetSum-num, numbers, num);
        if(sumCombo){
            prevNum ? sumCombo.push(prevNum) : (1===1);
            return sumCombo;
        }
    }
    return null;
}

//in optimised approach, the tree is traversed only once 
//worst case: maximum tree depth can be n, n = target sum
// each node will be paired with m node branched
//time complexity: O(m *n ),
// space complexity: O(n) stack but since memo object stores arrays, n keys with lengths of array running n in worst case
//so space complexity: O(n) from stack + O(n*n) from memo ~ O(n*n) = O(n2) Quadratic space complexity
const howSum_optimised = function(targetSum, numbers, prevNum = null, alreadyCalculated = new Map()){
    if(alreadyCalculated.has(targetSum)) return alreadyCalculated.get(targetSum);
    if(targetSum === 0) return [prevNum];
    if(targetSum < 0) return null;
    for(let num of numbers){
        const sumCombo = howSum_optimised(targetSum-num, numbers, num, alreadyCalculated);
        if(sumCombo){
            prevNum ? sumCombo.push(prevNum) : (1===1);
            alreadyCalculated.set(targetSum, sumCombo);
            return sumCombo;
        }
    }
    alreadyCalculated.set(targetSum, null);
    return null;
}

const howSum_optimised2 = function(targetSum, numbers, alreadyCalculated = new Map()){
    if(alreadyCalculated.has(targetSum)) return alreadyCalculated.get(targetSum);
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    for(let num of numbers){
        const sumCombo = howSum_optimised2(targetSum-num, numbers, alreadyCalculated);
        if(sumCombo){
            sumCombo.push(num);
            alreadyCalculated.set(targetSum, sumCombo);
            return sumCombo;
        }
    }
    alreadyCalculated.set(targetSum, null);
    return null;
}

// test1();
test2();