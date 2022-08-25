/* sets
A set is a collection of items that do not have any duplicates

It's usually used to check the existence of an element in a collection
*/


const mySet = function(){
    //the var collection will hold all the values of the set
    this.collection = [];

    //has: check the presence of an element and return true/false
    this.has = function(element){
        return (this.collection.indexOf(element) !== -1);
    }

    //values: return all the values in the set
    this.values = function(){
        return this.collection;
    }

    //add: add an element to the set
    this.add = function(element){
        if(!this.has(element)){
            this.collection.push(element);
            return true;
        }
        return false;
    }
    this.remove = function(element){
        if(this.has(element)){
            index = this.collection.indexOf(element);
            this.collection.splice(index,1);
            return true;
        }
        return false;
    }
    this.size = function(){
        return this.collection.length;
    }
    //union: this method will return the union of 2 sets
    this.union = function(otherSet){
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    }

    //intersection: this method will return the intersection of 2 sets'
    this.intersection = function(otherSet){
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            otherSet.has(e) ? (intersectionSet.add(e)) : (1===1);
        })
        return intersectionSet;
    }

    //difference: return the element of first set not present in the second set
    this.difference = function(otherSet){
        var differenceSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            otherSet.has(e) ? (1 ===1 ): (differenceSet.add(e));
        })
        return differenceSet;
    }
    //subset: this method will test if the current set is a subset of another set
    this.subset = function(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        })
    }


}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(Array.from(setA.intersection(setB).values()));
console.log(setA.union(setB));
console.log(setB.difference(setA));

var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(Array.from(setD.values()));
setD.delete("a");
console.log(setD.has("a"));