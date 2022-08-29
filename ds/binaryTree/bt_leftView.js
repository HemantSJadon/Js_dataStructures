import {Node} from './bt_nodeDefintion.js';

const test1 = () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    const e = new Node('e');
    const f = new Node('f');

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    //     a
    //    /  \
    //    b   c
    //   / \   \
    //  d  e    f

    console.log(getLeftView(a)); //[a,b,d]
}

const test2 = () => {
    console.log(getLeftView(null)); // null
}

const test3 = () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    const e = new Node('e');

    a.right = b;
    b.left = c;
    c.right = d;
    d.right = e;
            // a
            //  \
            //   b
            //  /
            // c
            //  \
            //   d
            //    \
            //     e
    console.log(getLeftView(a)); //[a,b,c,d,e]
}

//Time: O(n) space: O(n)
const getLeftView = function(root){
    if(root === null) return null;
    const queue = [[root,1]];
    const result =[];
    let preLevel = 0;
    while(queue.length > 0){
        const [currentNode, currLevel] = queue.shift();
        const {val, left, right} = currentNode;
        if(currLevel > preLevel) result.push(val);
        preLevel = currLevel;
        if(left) queue.push([left,currLevel +1]);
        if(right) queue.push([right,currLevel + 1]);
    }
    return result;
}

test1();
test2();
test3();