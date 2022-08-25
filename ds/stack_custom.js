var Stack = function(){
    this.count = 0;
    this.storage = {};

    // Adds a value on to the end of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count ++;
    }

    //pop: removes and return the value at the end of the stack
    this.pop = function(){
        if(this.count == 0){
            return undefined;
        }
        var result = this.storage[this.count-1];
        delete this.storage[this.count];
        this.count--;
        return result;
    }

    this.size = function(){
        return this.count;
    }

    //Peek: returns the item at the end of the stack
    this.peek = function(value){
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek())
