/* Problem : 
Write a function 'countConstruct(target, wordBank)' that accepts a
target string and an array of strings.

The function should return the number of ways that the “target~ can
be constructed by concatenating elements of the “wordBank~ array.

You may reuse elements of “wordBank” as many times as needed.
*/

const test1 = () => {
    const target = "aaafaaaafaaaffaaaaaaaafaaaafaaaffaaafffafaaaaafaaaf" //"Abhunt";
    const wordBank = ["a","aa","f","aaf","aaa","fa","aaaa","ff"];//["A", "Abh", "t", "h", "Ab", "un"];
    console.log(`checking how many ways the word "${target}" can be constructed from the collection below...
    ${wordBank}`);

    // console.time("countConstruct");
    // console.log(countConstruct(target, wordBank));
    // console.timeEnd("countConstruct");

    console.time("countConstruct_optimised");
    console.log(countConstruct_optimised(target, wordBank));
    console.timeEnd("countConstruct_optimised");

}

//total nodes of the tree , at each node string slicing 
//n = length of the target string, m = length of the wordBank
// exponential complexity
//time = O(m^n * n)
//space = call stack O(n)
const countConstruct = function(target, wordBank){
    if(target.length === 0) return 1;
    let totalCount = 0;
    for(let w of wordBank){
        if(target.substr(0, w.length) === w){
            const suffix = target.slice(w.length);
            totalCount += countConstruct(suffix, wordBank);
        }
    }
    return totalCount;
}

//each substring branches out as per wordBank and explore the complete tree only once 
// every successive occurence of the substring fetched from memoised dictionary
//n = length of target string, m = length of word bank
// worst case, level/height of tree is n
//time complexity: O(n * m * stringops) > O(n *m *n) ~O(m *n2) > Polynomial/ Quadratic complexity
//space: Call + memo > O(n ) + number of keys in map> O(n) + O(n)  ~ O(n)
const countConstruct_optimised = function(target, wordBank, alreadyCounted = new Map()){
    if(alreadyCounted.has(target)) return alreadyCounted.get(target);
    if(target.length === 0) return 1;
    let totalCount = 0;
    for(let w of wordBank){
        if(target.substr(0, w.length) === w){
            const suffix = target.slice(w.length);
            totalCount += countConstruct_optimised(suffix, wordBank, alreadyCounted);
        }
    }
    alreadyCounted.set(target,totalCount);
    return totalCount;
}

test1();
