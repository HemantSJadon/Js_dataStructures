//Problem: https://structy.net/problems/depth-first-values
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

    console.log(depthFirstValues_iterative(a));
}

const test2 = () => {
    console.log(depthFirstValues_iterative(null));
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
    console.log(depthFirstValue_recursive(a));
}


//Time and space complexity: O(n) linear since each node is visited once and removed from stack only once n = number of nodes in the tree
const depthFirstValues_iterative = function (root) {
    const traversed = [];
    if (root !== null) {
        const stack = [root];
        while (stack.length > 0) {
            const current = stack.pop();
            const { val, left, right } = current;
            traversed.push(val);
            if (right) stack.push(right);
            if (left) stack.push(left);
        }
    }
    return traversed;
};

const depthFirstValue_recursive = function(node, traversed = []){
    if(node === null) return;
    const {val, left, right} = node;
    traversed.push(val);
    depthFirstValue_recursive(left, traversed);
    depthFirstValue_recursive(right, traversed);
    return traversed;
}


test1();
test2();
test3();