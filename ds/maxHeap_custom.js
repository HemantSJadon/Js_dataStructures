const maxHeap = function(){
    let heap = [null];
    //insert(num): inserted in the heap without violating the heap constraint
    this.insert = function(num){
        heap.push(num);
        let idx = heap.length-1;
        //bubbling up
        while(heap[idx] > heap[Math.floor(idx/2)] && idx >1){
            [heap[Math.floor(idx/2)],heap[idx]] = [heap[idx],heap[Math.floor(idx/2)]];
            idx = Math.floor(idx/2);
        }
    }
    //remove(): remove the maximum number from heap and then restructure to restore heap constraint
    this.remove = function(){
        const el = heap[1];
        let idx = heap.length-1;
        heap[1] = heap[idx];
        heap.splice(idx,1);
        let parent = 1;
        //bubbling down
        while(parent <= Math.floor(idx/2)){
            let left = 2*parent;
            if(left >= idx){
                break;
            }
            let right = 2*parent+1;
            let childIndex = (right < idx) ? (heap[left] > heap[right] ? left : right) : (left);
            if(heap[childIndex] > heap[parent]){
                [heap[parent],heap[childIndex]] = [heap[childIndex], heap[parent]];
                parent = childIndex;
            }
            else {
                break;
            }
        }
        return el;
    }
    //print(): returns the heap collection
    this.print = function(){
        return heap;
    }
    //sort():  Heap sort 
    this.sort = function(){
        var sorted = new Array();
        while(heap.length > 1){
            sorted.push(this.remove());
        }
        return sorted;
    }
}

const collection = new maxHeap();
collection.insert(2);
collection.insert(14);
collection.insert(11);
collection.insert(4);
collection.insert(19);
collection.insert(25);
collection.insert(21);

console.log(collection.print());

// console.log(collection.remove());
// console.log(collection.remove());
// console.log(collection.remove());
// console.log(collection.remove());
// console.log(collection.remove());
// console.log(collection.print());

console.log(collection.sort());