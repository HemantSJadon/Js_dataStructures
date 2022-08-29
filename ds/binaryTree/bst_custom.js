/*bst: a tree data strucuture
where each node has at most 2 children nodes

left child is less than the value of parent
right child is greater than the value of parent
*/
import {Node} from './bt_nodeDefintion.js';

class BST{
    //constructor
    constructor(){
        this.root = null;
    }

    //add(data): adds new data as a node in it's appropriate position without violating any constraints
    add(data){
        let node = this.root;
        if(node === null){
            this.root = new Node(data);
            return;
        }
        else {
            const searchTree = function(node){
                if(data < node.val){
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    }
                    else {
                        return searchTree(node.left);
                    }
                }
                else if(data > node.val){
                    if(node.right === null){
                        node.right = new Node(data);
                        return;
                    }
                    else {
                        return searchTree(node.right);
                    }
                }
                else {
                    //not adding the data if same data value is already present in the tree
                    return null;
                }
            }
            return searchTree(node);
        }
    }
    //findMin() : find and return the minimum value in the tree
    findMin(){
        let current = this.root;
        while(current){
            if(current.left !== null){
                current = current.left;
                continue;
            }
            break;
        }
        return current.val;
    }
    //findMax(): find and return the maximum value in the tree
    findMax(){
        let current = this.root;
        while(current){
            if(current.right !== null){
                current = current.right;
                continue;
            }
            break;
        }
        return current.val;
    }
    //find(data): find and return the subtree with data node as the root
    find(data){
        let current = this.root;
        while(current || current !== null){
            if(current.val === data){
                return current;
            }
            else if( data < current.val){
                current = current.left;
            }
            else{
                current = current.right;
            }
        }
        return null | undefined;
    }
    //isPresent(data): checks whether the data value is present in the tree or not, return true/false
    isPresent(data){
        let current = this.root;
        while(current || current !== null){
            if(current.val === data){
                return true;
            }
            else if( data < current.val){
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        return false;
    }
    //remove(data): remove the node with data value without violating any constraints of the binary tree
    remove(data){
        const removeNode = function(node, data){
           if(node){
                if(data === node.val){
                    if(node.left === null && node.right === null){
                        return null;
                    }
                    else if(node.left !== null && node.right === null){
                        return node.left
                    }
                    else if(node.left === null && node.right != null){
                        return node.right;
                    }
                    else {
                        let tempNode = node.right;
                        while(tempNode.left != null){
                            tempNode = tempNode.left;
                        }
                        node.val = tempNode.val;
                        node.right = removeNode(node.right, tempNode.val);
                        return node;
                    }
                }
                else if( data < node.val){
                    node.left = removeNode(node.left, data);
                    return node;
                }
                else {
                    node.right = removeNode(node.right, data);
                    return node;
                }
            }
        }
        this.root = removeNode(this.root, data);
    }

    //isBalanced(): checks whether the given tree is balanced or not (the difference between min height and max height of the tree should not exceed one for it to be balanced)
    // returns true or false
    isBalanced(){
        return this.findMaxHeight() - this.findMinHeight() <= 1;
    }

    //findMinHeight(): returns the minimun height of the tree (distance between root node and the first node without 2 children)
    findMinHeight(node = this.root){
        if(node == null){
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if(left < right){
            return left + 1;
        }
        else {
            return right + 1;
        }
    }
    //findMaxHeight(): return the maximum distance between a root node and a leaf node
    findMaxHeight(node = this.root){
        if(node == null){
            return -1;
        }
        let left = this.findMaxHeight(node.left);
        let right= this.findMaxHeight(node.right);
        if(left > right){
            return left + 1;
        }
        else {
            return right +1;
        }
    }
    //inOrder() : in order traversal of tree 
    inOrder(node = this.root, traversalArray = []){
        if(node !== null){
            this.inOrder(node.left, traversalArray);
            traversalArray.push(node.val);
            this.inOrder(node.right, traversalArray);
            return traversalArray;
        }
    }
    //preorder() : pre order traversal of the tree
    preOrder(node = this.root,traversalArray = []){
        if(node !== null){
            traversalArray.push(node.val);
            this.preOrder(node.left);
            this.preOrder(node.right);
            return traversalArray;
        }
    }
    //postorder(): post order traversal of the tree
    postOrder(node = this.root,traversalArray = []){
        if(node !== null){
            this.postOrder(node.left);
            this.postOrder(node.right);
            traversalArray.push(node.val);
            return traversalArray;
        }
    }
    levelOrder(){
        let traversalArray = [];
        if(this.root !== null){
            let queue = [];
            queue.push(this.root);
            while(queue.length > 0){
                const visited = queue.shift();
                traversalArray.push(visited.val);
                visited.left !== null ? queue.push(visited.left) : (1===1);
                visited.right !== null ? queue.push(visited.right) : (1 === 1 );
            }
        }
        return traversalArray;
    }


}

const bst = new BST();
console.log("started...");


//Test 1 
/* bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);

console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.isPresent(4)); */


//Test 2
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());

bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());


// bst.inOrder().forEach(e => console.log(e));
// bst.preOrder().forEach(e => console.log(e));
// bst.postOrder().forEach(e => console.log(e));
console.log('level order is below...');
bst.levelOrder().forEach(e => console.log(e));

