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
    const target = "Abhunt";//"aaaf";
    const wordBank = ["A", "Abh", "t", "h", "Ab", "un"];//["a","aa","f","aaf","aaa","fa","aaaa","ff"]; //["a","aa","f","aaf"];
    console.log(`fetching all the ways the word "${target}" can be made using any combination from the collection below...
    ${wordBank}`);

    console.time("allConstruct");
    console.log(allConstruct(target, wordBank));
    console.timeEnd("allConstruct");

}

//time complexity: each index of array is traversed > n, at each traversal m operations> n*m
//, in each such operation all subarrays are copied over total subarrays count can run> m ^n
// time complexity is exponentials: O(m^n)
//space complexity: space complexity is also exponential
const allConstruct = function(target, wordBank){
    const helper = new Array(target.length+1).fill().map((e,i) => {
        return [target.slice(0,i),[]];
    })
    helper[0][1].push([]);
    for(var i = 0; i <= target.length ; i++){
        const currWays = helper[i][1];
        if(currWays.length > 0){
            for(let w of wordBank){
                const nextIdx = i+w.length;
                if(nextIdx <= target.length && helper[i][0].concat(w) === helper[nextIdx][0]){
                    currWays.forEach(way => {
                        helper[nextIdx][1].push([...way,w]);
                    });
                }
            }
        }
    }
    return helper[target.length][1];
}

test1();

// allConstruct('hemant',[]);