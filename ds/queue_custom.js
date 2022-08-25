/* Queues
first in first out
*/

const Queue = function (){
    this.collection = [];
    //print: prints all elements in the queue
    this.print = function(){
        console.log(this.collection);
    }
    //enqueue: add a new element at the end
    this.enqueue = function(element){
        this.collection.push(element);
    }
    //dequeue: removes an element from the front/start of queue
    this.dequeue = function(){
        return this.collection.shift();
    }
    //peek: returns the next element to be removed
    this.peek = function(){
        return this.collection[0];
    }
    //size: return the current size of the queue
    this.size = function(){
        return this.collection.length;
    }
    //isEmpty: checks whether the queue has any more element left to remove or not, returns true/false
    this.isEmpty = function(){
        return this.collection.length === 0;
    }
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
console.log(q.dequeue());
console.log(q.peek());
q.print();


