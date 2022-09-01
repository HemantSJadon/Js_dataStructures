/*Problem: 
Write a function 'canConstruct(target, wordBank)' that accepts a
target string and an array of strings.

The function should return a boolean indicating whether or not the
'target' can be constructed by concatenating elements of the
'wordBank' array.

You may reuse elements of 'wordBank' as many times as needed.
*/

const test1 = () => {
    const target = "aaa"; //"aaaaaaaaaaaaaaaaaaaar";
    const wordBank = ["aaaa"];//["a","aa","aaa","aaaa"];
    console.log( `checking whether the word "${target}" can be constructed using any combination from the collection below...
    ${wordBank}`);

    // console.time("canConstruct");
    // console.log("Can construct:", canConstruct(target, wordBank));
    // console.timeEnd("canConstruct");

    console.time("canConstruct_optimised");
    console.log("Can construct:", canConstruct_optimised(target, wordBank));
    console.timeEnd("canConstruct_optimised");
}

//n = length of target string, m = length of word bank array
//worst case: each letter of word bank is a single char string with char which is not present in target
// entire tree will be traversed before returning false
//complexity: exponential
//time: traversal of each node + string concat at each node > m + 1~m
// O(m ^ n * n)
//space complexity: stack O(n)
const canConstruct = function(target, wordBank/* , currString= new String() */){
    if(target.length === 0) return true;
    for(let w of wordBank){
        if(target.substr(0,w.length) !== w) continue; // another way to check : target.indexOf() !== -1 and === 0
        const remainder = target.substr(w.length); //another way: target.slice(w.length)
        if(canConstruct(remainder, wordBank)) return true;
    }
    return false;
}

// the remaining string at each level goes into for loop with each element of wordbank only once
// if at each level, only one letter is striped from the starting, total levels = n (length of target string)
// time complexity: O(n * m * n) > O(m * n^2) ~ polynomial where m = length of word bank + time of substring operation
// space: stack + memoisation = O(n) + O(n) ~ O(n)
const canConstruct_optimised = function(target, wordBank, alreadyFound = new Map()){
    if(alreadyFound.has(target)) return alreadyFound.get(target);
    if(target.length === 0) return true;
    for(let w of wordBank){
        if(target.substr(0,w.length) !== w) continue;
        const remainder = target.substr(w.length);
        if(canConstruct_optimised(remainder, wordBank, alreadyFound)) {
            alreadyFound.set(target, true);
            return true
        };
    }
    alreadyFound.set(target, false);
    return false;
}




test1();