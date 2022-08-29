//Problem: https://structy.net/problems/tree-includes

import {Node} from './bt_nodeDefintion.js';

const test1 = function () {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    //      a
    //    /   \
    //   b     c
    //  / \     \
    // d   e     f

    console.log(treeIncludes_dfs_recursive(a, "e")); // -> true
}

const test2 = () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    //      a
    //    /   \
    //   b     c
    //  / \     \
    // d   e     f

    console.log(treeIncludes_dfs_recursive(a, "n")); // -> false
}

const test3 = () => {
    console.log(treeIncludes_dfs_recursive(null, "b")); // -> false
}

const test4 = () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");
    const g = new Node("g");
    const h = new Node("h");

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    e.left = g;
    f.right = h;

    //      a
    //    /   \
    //   b     c
    //  / \     \
    // d   e     f
    //    /       \
    //   g         h

    console.log(treeIncludes_dfs_iterative(a, "p")); // -> false
}

//Since tree will be traversed only once, linear complexity
//time complexity: O(n), space complexity: O(n)
const treeIncludes_bfs = function (root, target) {
    if (!root) return false;
    const queue = [root];
    while (queue.length > 0) {
        const { val, left, right } = queue.shift();
        if (val === target) return true;
        if (left) queue.push(left);
        if (right) queue.push(right);
    }
    return false;
};

const treeIncludes_dfs_iterative = function(root, target){
    if(!root) return false;
    const stack = [root];
    while(stack.length > 0){
        const {val, left, right} = stack.pop();
        if(val === target) return true;
        if(left) stack.push(left);
        if(right) stack.push(right);
    }
    return false;
} 

const treeIncludes_dfs_recursive = function(node, target){
    if(!node) return false;
    const {val, left, right} = node;
    if(val === target) return true;
    return treeIncludes_dfs_recursive(left, target) || treeIncludes_dfs_recursive(right, target);

} 

test1();
test2();
test3();
test4();