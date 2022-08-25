//priority queue

const PriorityQueue = function(){
    var collection = [];
    //print: prints the collection
    this.print = function(){
        console.log(collection);
    }
    //enqueue: add the incoming element at a position decided by it's priority
    this.enqueue = function(element){
        if(this.isEmpty()){
            collection.push(element);
            return;
        }
        else {
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                if(element[1] < collection[i][1]){
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if(!added){
                collection.push(element);
            }
            return;
        }
        //return;
    }
    //dequeue: remove the element at front of the collection
    this.dequeue = function(){
        const value = collection.shift();
        return value[0];
    }
    //peek: returns the element at the front of the collection
    this.peek = function(){
        return collection[0];
    }
    //size: returns the current size of the queue
    this.size = function(){
        return collection.length;
    }
    //isEmpty: checks whether the collection is empty or not, returns true/false
    this.isEmpty = function(){
        return collection.length === 0;
    }

}

var pq = new PriorityQueue();
console.log('adding new element');
pq.enqueue(['Hemant Jadon',2]);
console.log(pq.size())
pq.enqueue(['shruti singh',3]);
pq.enqueue(['Aditi singh',1]);
pq.print();
console.log(pq.dequeue());
console.log(pq.peek());
pq.print();

