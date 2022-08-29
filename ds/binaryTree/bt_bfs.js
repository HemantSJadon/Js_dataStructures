//Problem: https://structy.net/problems/breadth-first-values

import { Node } from './bt_nodeDefintion.js';

const test1 = () => {
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');
  const e = new Node('e');
  const f = new Node('f');
  const g = new Node('g');
  const h = new Node('h');

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

  console.log(breadthFirstValues(a));
  //   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
}

const breadthFirstValues = function (root) {
  const traversed = [];
  if (root) {
    const queue = [root];
    while (queue.length > 0) {
      const { val, left, right } = queue.shift();
      traversed.push(val);
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
  }
  return traversed;
};

test1();
console.log(breadthFirstValues(null));