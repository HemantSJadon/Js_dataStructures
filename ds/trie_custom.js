/* Trie: a special type of tree structure
every step is a node represented by a letter
storing words in a dictionary and checking if the word exists in the collection
*/

const Node = function () {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function () {
        this.end = true;
    }
    this.isEnd = function () {
        return this.end;
    }

}

const Trie = function () {
    this.root = new Node();
    //add(input): adds a word to the trie data structure
    this.add = function (input, node = this.root) {
        //terminating condition for recursion
        if (input.length === 0) {
            node.setEnd();
            return;
        }
        else {
            if (!node.keys.has(input[0])) {
                node.keys.set(input[0], new Node());
                return this.add(input.substr(1), node.keys.get(input[0]));
            }
            else {
                return this.add(input.substr(1), node.keys.get(input[0]));
            }
        }
    }

    //isWord(word): checks whether a given word is a word in the trie
    this.isWord = function (word) {
        if (word.length === 0) {
            return this.root.isEnd();
        }
        else {
            var node = this.root;
            while (word.length > 0) {
                if (node.keys.size === 0 || !node.keys.has(word[0])) {
                    return false;
                }
                node = node.keys.get(word[0]);
                word = word.substr(1);
            }
            return node.isEnd();
        }
    }
    //print(): prints all the words in the trie
    this.print = function () {
        var words = new Array();
        if (this.root.isEnd()) {
            words.push("");
        }
        else {
            const findNext = function (node, string) {
                if (node.keys.size === 0 && string.length > 0) {
                    words.push(string);
                }
                else {
                    for (let letter of node.keys.keys()) {
                        findNext(node.keys.get(letter), string.concat(letter));
                    }
                    if (node.isEnd()) {
                        words.push(string);
                    }
                }
            }
            findNext(this.root, new String());
        }

        return words.length > 0 ? words : null;

    }

}

const dict = new Trie();
// dict.add("what");
// dict.add("where");
// dict.add("Wonderful")
// console.log(dict.isWord("wonderful"));
// console.log(dict.isWord(""));

// dict.print().forEach(w => console.log(w));

dict.add('ball');
dict.add('bat');
dict.add('doll');
dict.add('dork');
dict.add('do');
dict.add('dorm');
dict.add('send');
dict.add('sense');
console.log(dict.isWord('doll'));
console.log(dict.isWord('dork'));
console.log(dict.isWord('dorf'));
console.log(dict.print());