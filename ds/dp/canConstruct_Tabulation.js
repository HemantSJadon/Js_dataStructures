/*Problem: 
Write a function 'canConstruct(target, wordBank)' that accepts a
target string and an array of strings.

The function should return a boolean indicating whether or not the
'target' can be constructed by concatenating elements of the
'wordBank' array.

You may reuse elements of 'wordBank' as many times as needed.
*/

const test1 = () => {
    const target = "aaaaaaaaaaaaaaaafffaaaaaaaf"; //"aaaaaaaaaaaaaaaaaaaar";
    const wordBank = ["a","aa","aaf","f"];//["aaaa"];//;
    console.log( `checking whether the word "${target}" can be constructed using any combination from the collection below...
    ${wordBank}`);

    console.time("canConstruct");
    console.log("Can construct:", canConstruct(target, wordBank));
    console.timeEnd("canConstruct");
}

// each index of the array stores a subarray
//each index of the array is traversed once,
//at each index, m operations are performed, in each of this operation a string concetation is performed, string length can be n (target string length)
//n = length of target string, m = length of the wordBank
//time complexity: O(n *m *n) > O(m*n^2) ~polynomial complexity
//space complexity: O(n*n) > O(n^2) ~polynomial complexity
const canConstruct = function(target, wordBank){
    const helper = new Array(target.length+ 1).fill().map((e,i) => {
        return [target.substr(0,i), false];
    });
    helper[0][1] = true;
    for(var i = 0; i <= target.length; i++){
        if(helper[i][1]){
            for(let w of wordBank){
                const nextIdx = i+w.length;
                if(nextIdx <= target.length && !helper[nextIdx][1] && (helper[i][0].concat(w) === helper[nextIdx][0]) ){
                    helper[nextIdx][1] = true;
                    if(helper[nextIdx][0] === target) return true;//early stopping
                }
            }
        }
    }
    return helper[target.length][1];
    
}

// canConstruct('hemant',[]);

test1();