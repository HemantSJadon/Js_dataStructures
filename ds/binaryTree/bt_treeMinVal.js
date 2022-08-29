//Problem: https://structy.net/problems/tree-min-value

import {Node} from './bt_nodeDefintion.js';
const test1 = () => {
    const a = new Node(3);
    const b = new Node(11);
    const c = new Node(4);
    const d = new Node(4);
    const e = new Node(-2);
    const f = new Node(1);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    //       3
    //    /    \
    //   11     4
    //  / \      \
    // 4   -2     1

    console.log(treeMinValue_dfs_recursive(a)); // -> -2
}

const test2 = () => {

    const a = new Node(5);
    const b = new Node(11);
    const c = new Node(3);
    const d = new Node(4);
    const e = new Node(14);
    const f = new Node(12);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    //       5
    //    /    \
    //   11     3
    //  / \      \
    // 4   14     12

    console.log(treeMinValue_dfs_recursive(a)); // -> 3
}

const test3 = () => {
    const a = new Node(42);

    //        42

    console.log(treeMinValue_dfs_recursive(a)); // -> 42
}


//Complexity: since tree will be traversed only once to solve this, linear
//time: O(n) space: O(n)
const treeMinValue = function(root){
    if(!root) return null;
    const stack = [root];
    let min = Infinity;
    while(stack.length > 0){
        const current = stack.pop();
        const {val, left, right} = current;
        min = Math.min(val, min);
        if(left) stack.push(left)   ;
        if(right) stack.push(right);
    }
    return min;    
};

const treeMinValue_dfs_recursive = function(node, currentMin = Infinity){
    if(!node) return currentMin;
    const {val, left, right} = node;
    currentMin = Math.min(currentMin, val);
    const leftMin = treeMinValue_dfs_recursive(left,currentMin);
    const rightMin  = treeMinValue_dfs_recursive(right, currentMin);
    return Math.min(currentMin, leftMin, rightMin);   
}

test1();
test2();
test3();