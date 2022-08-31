//Problem: https://structy.net/problems/max-root-to-leaf-path-sum

import { Node } from './bt_nodeDefintion.js';

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

    console.log(maxPathSum_dfs_recursive(a)); // -> 18
}
const test2 = () => {
    const a = new Node(5);
    const b = new Node(11);
    const c = new Node(54);
    const d = new Node(20);
    const e = new Node(15);
    const f = new Node(1);
    const g = new Node(3);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    e.left = f;
    e.right = g;

    //        5
    //     /    \
    //    11    54
    //  /   \
    // 20   15
    //      / \
    //     1  3

    console.log(maxPathSum_dfs_recursive(a)); // -> 59
}

const test3 = () => {
    const a = new Node(-1);
    const b = new Node(-6);
    const c = new Node(-5);
    const d = new Node(-3);
    const e = new Node(0);
    const f = new Node(-13);
    const g = new Node(-1);
    const h = new Node(-2);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    e.left = g;
    f.right = h;

    //        -1
    //      /   \
    //    -6    -5
    //   /  \     \
    // -3   0    -13
    //     /       \
    //    -1       -2

    console.log(maxPathSum_dfs_recursive(a)); // -> -8
}

// Every node is traversed only once, linear complexity
//time: O(n), space: O(n)
const maxPathSum_dfs_recursive = function(node, currentSum = 0){
    if(!node) return -Infinity;
    const {val, left, right} = node;
    currentSum += val;
    if(!left && !right) return currentSum;
    return Math.max(maxPathSum_dfs_recursive(left, currentSum), maxPathSum_dfs_recursive(right, currentSum));
};

const maxPath_dfs_iterative = function(root){
    if(!root) return 0;
    let maxSum = -Infinity;
    const stack = [[root,0]];
    while(stack.length > 0){
        let [current, currentSum] = stack.pop();
        const {val, left, right} = current;
        currentSum += val;
        if(!left && !right) maxSum = Math.max(maxSum, currentSum);
        if(left) stack.push([left,currentSum]);
        if(right) stack.push([right,currentSum]);
    }
    return maxSum;

}
test1();
test2();
test3();