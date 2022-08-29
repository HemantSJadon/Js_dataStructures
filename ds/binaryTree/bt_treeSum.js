//Problem: https://structy.net/problems/tree-sum

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

    console.log(treeSum_bfs(a)); // -> 21
}

const test2 = () => {
    const a = new Node(1);
    const b = new Node(6);
    const c = new Node(0);
    const d = new Node(3);
    const e = new Node(-6);
    const f = new Node(2);
    const g = new Node(2);
    const h = new Node(2);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    e.left = g;
    f.right = h;

    //      1
    //    /   \
    //   6     0
    //  / \     \
    // 3   -6    2
    //    /       \
    //   2         2

    console.log(treeSum_bfs(a)); // -> 10
}

const test3 = () => {
    console.log(treeSum_bfs(null)); // -> 0
}


//Solution: Linear since the tree only need to be traversed once, time complexity: O(n), space complexity: O(n)
const treeSum = function(node) {
    // todo
    if(!node) return 0;
    const {val, left, right} = node;
    let sum = val;
    sum += treeSum(left);
    sum += treeSum(right);
    return sum;
};

const treeSum_dfs_iterative = function(root){
    if(!root) return 0;
    const stack = [root];
    let sum = 0;
    while(stack.length > 0){
        let current = stack.pop();
        const {val, left, right} = current;
        sum += val;
        if(left) stack.push(left);
        if(right) stack.push(right);
    }
    return sum;
}

const treeSum_bfs = function(root){
    if(!root) return 0;
    const queue = [root];
    let sum = 0;
    while(queue.length > 0){
        const current = queue.shift();
        const {val, left, right} = current;
        sum += val;
        if(left) queue.push(left);
        if(right) queue.push(right);
    }
    return sum;
}

test1();
test2();
test3();