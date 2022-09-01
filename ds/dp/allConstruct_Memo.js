/*Problem: 
Write a function 'allConstruct(target, wordBank)' that accepts a
target string and an array of strings.

The function should return a 2D array containing all of the ways
that the 'target' can be constructed by concatenating elements of
the 'wordBank' array. Each element of the 2D array should represent
one combination that constructs the 'target'.

You may reuse elements of 'wordBank' as many times as needed.
*/

const test1 = () => {
    const target = "Adbhunt";//"aaaf";
    const wordBank = ["A", "Abh", "t", "h", "Ab", "un"];//["a","aa","f","aaf","aaa","fa","aaaa","ff"]; //["a","aa","f","aaf"];
    console.log(`fetching all the ways the word "${target}" can be made using any combination from the collection below...
    ${wordBank}`);

    console.time("allConstruct");
    console.log(allConstruct(target, wordBank));
    console.timeEnd("allConstruct");

}

//all nodes will be traversed, all duplicate subtrees will be explored as many times as they occur
//also at each nodes, all the subarrays will have to copied 
//in worst case, a complete tree will be completely traversed and all the leaves will be subarrays in the solution
//memoisation/ optimisation may help with traversal, but subarrays will still need to be copied. 
// the number of subarrays/leaves in the worst case is proportional to m^n where n = length of the target, m = length of the wordBank
//time complexity: O(m^n),
//space complexity : not including output in the space, or not including subarrays in the space, it's call stack: O(n)
const allConstruct = function(target, wordBank){
    if(target.length === 0) return [[]];
    let allWays = [];
    for(let w of wordBank){
        if(target.substr(0,w.length) === w){
            const suffix = target.substr(w.length);
            const allWaysForRest = allConstruct(suffix, wordBank);
            allWaysForRest.forEach(way => {
                way.unshift(w);
                allWays.push(way);// allWays.push([w, ...way])
            });
        }
    }
    return allWays; 
}

test1();