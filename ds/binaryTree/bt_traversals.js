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

    console.log(inOrder(a));
    console.log(preOrder(a));
    console.log(postOrder(a));
}

const test2 = () => {
    console.log(inOrder(null));
    console.log(preOrder(null));
    console.log(postOrder(null));
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
    console.log(inOrder(a));
    console.log(preOrder(a));
    console.log(postOrder(a));
}

const inOrder = function (node) {
    if (node === null) return [];
    const { val, left, right } = node;
    const leftValues = inOrder(left);
    const rightValues = inOrder(right);
    return [...leftValues, val, ...rightValues];
}

const preOrder = function (node) {
    if (node === null) return [];
    const leftValues = preOrder(node.left);
    const rightValues = preOrder(node.right);
    return [node.val, ...leftValues, ...rightValues];
}

const postOrder = function (node) {
    if (!node) return [];
    const leftValues = postOrder(node.left);
    const rightValues = postOrder(node.right);
    return [...leftValues, ...rightValues, node.val];
}

test1();
test2();
test3();
