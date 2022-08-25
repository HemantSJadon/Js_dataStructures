/* stacks */

//functions: push, pop, peek, length

//stacks using array
var letters  = [];
var word = "bob";
var rword = "";

//put letters of the word into stack
for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

//pop off the stack in the reverse order

for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
}

console.log(word + ` ${rword === word ? 'is': 'is not'} a palindrome`);
