/*Heaps
a complete binary tree : 
any node can have atmost 2 children
All levels before the last level are completely filled. 
Last level is filled from left to right.
 
Implemented as an array: first index(0) is left null
heap root is index 1

children of a parent node with index i: 
left child: 2i
right child: 2i+1

parent of a child node with index i:
parent: i/2


Heap Constraints:
minHeap: each child node is gte to its parent node
maxHeap: each parent node is gte to all it's children
*/

const minHeap = function(){
    let heap = [null];

    //insert(num): first inserts at the last available position(or next position to be filled) and then bubble up as per the Heap constraint
    this.insert = function(num){
        heap.push(num);
        if(heap.length > 2){
            let idx = heap.length -1;
            while(heap[idx] < heap[Math.floor(idx/2)] && idx > 1){
                [heap[Math.floor(idx/2)],heap[idx]] = [heap[idx],heap[Math.floor(idx/2)]];
                idx = Math.floor(idx/2);
            }
        }
    }
    //remove(): this removes the smallest element from the heap and the ensure the heap constraint is not violated by restructuring the heap  / bubble down
    this.remove = function(){
        let el = heap[1];
        let lastIndex = heap.length-1;
        heap[1] = heap[lastIndex];
        heap.splice(lastIndex,1);
        let parent = 1;
        while(parent <= Math.floor(lastIndex/2)){
            let left = 2*parent;
            if(left >= lastIndex){
                break;
            }
            let right = 2*parent+1;
            let childIndex = (right  < lastIndex) ? (heap[left] < heap[right] ? left: right) : (left);
            if(heap[childIndex] < heap[parent]){
                [heap[parent], heap[childIndex]] = [heap[childIndex],heap[parent]];
                parent = childIndex;
                continue;
            }
            else{
                break;
            }
        }
        return el;
    }

    //print(): return the array collection of all elements
    this.print = function(){
        return heap;
    }
    //sort(): return a sorted array (heap sort)
    this.sort = function(){
        var sorted = new Array();
        while(heap.length > 1){
            sorted.push(this.remove());
        }
        return sorted;
    }

}

const collection = new minHeap();
collection.insert(21);
collection.insert(19);
collection.insert(4);
collection.insert(11);
collection.insert(14);
collection.insert(25);
collection.insert(2);

console.log(collection.print());

// console.log(collection.remove());
// console.log(collection.print());

// console.log(collection.remove());
// console.log(collection.print());

// console.log(collection.remove());
// console.log(collection.print());

// console.log(collection.remove());
// console.log(collection.print());

// console.log(collection.remove());
// console.log(collection.print());


// console.log(collection.remove());
// console.log(collection.print());
console.log(collection.sort());