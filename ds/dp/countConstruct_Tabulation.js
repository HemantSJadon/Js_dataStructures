/* Problem : 
Write a function 'countConstruct(target, wordBank)' that accepts a
target string and an array of strings.

The function should return the number of ways that the “target~ can
be constructed by concatenating elements of the “wordBank~ array.

You may reuse elements of “wordBank” as many times as needed.
*/

const test1 = () => {
    const target = "aaaf";//"aaafaaaafaaaffaaaaaaaafaaaafaaaffaaafffafaaaaafaaaf" //"Abhunt";
    const wordBank = ["a","aa","aaf","f"];///["a","aa","f","aaf","aaa","fa","aaaa","ff"];//["A", "Abh", "t", "h", "Ab", "un"];
    console.log(`checking how many ways the word "${target}" can be constructed from the collection below...
    ${wordBank}`);

    console.time("countConstruct");
    console.log(countConstruct(target, wordBank));
    console.timeEnd("countConstruct");

}

//Time complexity: array traversal + each index > m operations with string concat
//O(m*n^2)
//space: array  + subarray O(n^2)
const countConstruct = function(target, wordBank){
    const helper = new Array(target.length+ 1).fill().map((e,i) => {
        return [target.substr(0,i), 0];
    });
    helper[0][1] = 1;
    console.log(helper);
    for(var i = 0; i <= target.length; i++){
        const currCount = helper[i][1];
        if(currCount > 0){
            for(let w of wordBank){
                const nextIdx = i + w.length;
                if(nextIdx <= target.length && helper[i][0].concat(w) === helper[nextIdx][0]){
                    helper[nextIdx][1] += currCount;
                }
            }
        }
    }
    return helper[target.length][1];
}

test1();
