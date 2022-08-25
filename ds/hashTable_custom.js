const hash = function(key, max){
    let hash = 0;
    for(var i = 0; i < key.length; i++){
        hash += key.charCodeAt(i);
    }
    return hash % max;
};

let HashTable = function(){
    let storage = [];
    const storageLimit = 4;
    //print: prints the storage
    this.print = function(){
        console.log(storage);
    };
    //add: add a key value pair at the corresponding index in the storage
    this.add = function(key, value) {
        let index = hash(key, storageLimit);
        if(storage[index]){
            var inserted = false;
            let n = storage[index].length;
            for(var i = 0; i < n; i++){
                if(storage[index][i][0] === key){
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            !inserted ? (storage[index].push([key,value])) : (1===1);
            return;
        }
        storage[index] = [];
        storage[index].push([key, value]);
        return;
    };
    //remove: remove the entry for a certain key from the hashTable
    this.remove = function(key){
        const index = hash(key,storageLimit);
        if(storage[index].length === 1 && storage[index][0][0] === key){
            delete storage[index];
        }
        else {
            let n = storage[index].length;
            for(var i = 0; i < n; i++){
                if(storage[index][i][0] === key){
                    storage[index].splice(i,1);
                    break;
                }
            }
        }
    }
    //lookup: look up the value against a key
    this.lookup = function(key){
        const index = hash(key, storageLimit);
        if(storage[index]){
            let n = storage[index].length;
            for (let i = 0; i < n; i++) {
                if(storage[index][i][0] === key){
                    return storage[index][i][1];
                }
            }
        }
        return undefined;

    }
};

const ht = new HashTable();
ht.add('Hemant Singh', 100);
console.log(hash('Hemant Singh',4));
ht.print();
ht.remove('Hemant Singh');
ht.print();
ht.add('Akanksha', 25);
ht.add('Richa', 12);
ht.add('Akanksgb',100);
ht.print();
console.log(ht.lookup('Akanksha'));
console.log(ht.lookup('Richa'));
console.log(ht.lookup('Akanksgb'));
ht.remove('Akanksha');
console.log(ht.lookup('Akanksha'));