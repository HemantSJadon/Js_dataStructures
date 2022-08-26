//problem: https://structy.net/problems/connected-components-count

//undirected graph
const graph = {
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
}; // => 3

/* {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}  *///=> 2

//One kind of traversal: Time: O(e) , space: O(n) space is for the stack/queue used during traversal

const connectedCompCount = function (graph) {
    const allNodes = [];
    Object.entries(graph).map(n => allNodes.push(parseInt(n[0])));
    const visited = new Set(); //O(1) lookup and O(1) addition
    let count = 0;
    for (let node of allNodes) {
        if (!visited.has(node)) {
            //explore(graph,node, visited);
            explore_recursive(graph, node, visited);
            count++;
        }
    }
    return count;
}

const explore = function(graph, startNode, visited = new Set()){
    const stack = [startNode];
    while(stack.length > 0){
        let current = stack.pop();
        visited.add(current);
        graph[current].forEach(n => {
            if(!visited.has(n)){
                stack.push(n);
            }
        })
    };
}

const explore_recursive = function(graph, node, visited){
    visited.add(node);
    for(let neighbor of graph[node]){
        !visited.has(neighbor) ?  (explore_recursive(graph, neighbor, visited)) : undefined; 
    }
}

console.log(connectedCompCount(graph));



//Ways to print property names of an object in js
/* const printObjectProperties = (obj) => {
    for(let prop in obj){
        console.log(prop);
    }
}
const printObjectProperties2 = (obj) => {
    Object.entries(obj).map(p => console.log(p[0]));
}
printObjectProperties({key: 'h', value: 's'});
printObjectProperties2({key: 'h', value: 's'}); */
