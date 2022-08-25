/* Linked list
A collection of nodes 
where each nodes contains some data and a pointer to the next node

first node is called head node.

size
head
add(element)
remove(element)
isEmpty()
indexOf(element)
elementAt(index)
addAt(index, element)
removeAt(index)
*/

const LinkedList = function(){
    let head = null;
    let size = 0;

    const Node = function(data, next){
        this.data = data;
        this.next = next;
    }
    //size(): returns the current size/length of the linked list
    this.size = function(){
        return size;
    }

    //head(): return the current head of the list
    this.head = function(){
        return head;
    }
    //add(element): adds a new element to the end of the list (O(n) without storing tail reference, O(1) with storing tail reference)
    this.add = function(element){
        const nodeToAdd = new Node(element, null);
        if(head === null){
            head = nodeToAdd;
        }
        else {
            var currentNode = head;
            while(currentNode.next !== null){
                currentNode = currentNode.next;
            }
            currentNode.next = nodeToAdd;
        }
        size++;
    }
    //remove(element): finds and removes the first node with value of element from the list
    this.remove = function(element){
        if(head !== null){
            var currentNode = head;
            var previousNode = null;
            while(currentNode !== null){
                if(currentNode.data === element){
                    if(previousNode === null){
                        head = currentNode.next;
                    }
                    else{
                        previousNode.next = currentNode.next;
                    }
                    size--;
                    return true;
                }
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            return false;
        }
        return false;

    }
    //removeAll(element): removes all nodes with value of element from the list
    this.removeAll = function(element){
        var isRemovedAny = false;
        if(head !== null){
            var currentNode = head;
            var previousNode = null;
            while(currentNode != null){
                if(currentNode.data === element){
                    if(previousNode === null){
                        head = currentNode.next;
                    }
                    else {
                        previousNode.next = currentNode.next;
                    }
                    size--;
                    isRemovedAny = true
                }
                else {
                    previousNode = currentNode;
                }
                currentNode = currentNode.next;
            }
        }
        return isRemovedAny;
    }

    //isEmpty(): checks whether the list is empty or not, returns true/false
    this.isEmpty = function(){
        return size === 0;
    }
    //indexOf(element): returns the index of first occurance of a node with value of element, returns -1 if no node found 
    this.indexOf = function(element){
        var currentNode = head;
        var index = -1;
        while(currentNode !== null){
            index++;
            if(currentNode.data === element){
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;;
    } 
    //elementAt(index): returns the element present at the given index
    this.elementAt = function(index){
        if(size === 0){
            console.log('list is empty.');
            return -1;
        }
        if(index < 0  || index > size-1){
            throw new Error('index out of range');
        };
        var currentNode = head;
        var currIndex = -1;
        while(currentNode !== null){
            currIndex ++;
            if(currIndex === index){
                return currentNode.data;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }
    //addAt(index, element): inserts the given element at given index
    this.addAt = function(index, element){
        if(index < 0 || index > size-1){
            throw new Error('index out of range');
        }
        if(index === 0){
            head = new Node(element,head);
        }
        else {
            var currentNode = head;
            var previousNode = null;
            var currIndex = -1;
            while(currentNode != null){
                currIndex ++;
                if(currIndex === index){
                    const nodeToInsert = new Node(element, currentNode);
                    previousNode.next = nodeToInsert;
                    break;
                }
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        size++;
        return;
    }
    //removeAt(index): removes the node/element present at the given index
    this.removeAt = function(index){
        if(index < 0 || index > size-1){
            throw new Error('index out of range');
        }
        var removedElement = null;
        if(index === 0){
            removedElement = head.data;
            head = head.next;
        }
        else {
            var currentNode = head;
            var previousNode = null;
            var currIndex = -1;
            while(currentNode !== null){
                currIndex ++;
                if(currIndex === index){
                    removedElement = currentNode.data;
                    previousNode.next = currentNode.next;
                    break;
                }
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        size --;
        return removedElement;
    }



}

const list = new LinkedList();
// console.log(list.size());
// console.log(list.head() === null);
list.add(5);
list.add(10);
list.add(15);
// console.log(list.size());
// console.log(list.head() === null);
// console.log("after removing 10 ...");

// console.log(list.remove(10));
// list.remove(5);
// console.log(list.removeAll(5));
// console.log(list.remove(10));
// console.log(list.size());
// console.log(list.head() === null);
// console.log(list.isEmpty());
// list.remove(5);
console.log(list.indexOf(15));
list.addAt(2,20);
console.log(list.indexOf(15));
console.log(list.indexOf(20));
console.log('removing first occurence of 10...');
console.log(list.remove(10));
console.log(list.indexOf(15));
console.log(list.indexOf(20));

console.log('removing element at index 1 ');
console.log(list.removeAt(1));
console.log(list.indexOf(20));
console.log(list.indexOf(15));
// console.log(list.elementAt(list.size()-4));