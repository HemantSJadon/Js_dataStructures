//problem: https://structy.net/problems/largest-component

const givenGraph = 
/* {
    1: ['2'],
    2: ['1','8'],
    6: ['7'],
    9: ['8'],
    7: ['6', '8'],
    8: ['9', '7', '2']
} */ // => 6

/* {
    3: [],
    4: ['6'],
    6: ['4', '5', '7', '8'],
    8: ['6'],
    7: ['6'],
    5: ['6'],
    1: ['2'],
    2: ['1']
} */ // => 5

{
    0: ['4','7'],
    1: [],
    2: [],
    3: ['6'],
    4: ['0'],
    6: ['3'],
    7: ['0'],
    8: []
} // => 3

// its actually a traversal: Time: O(e), Space: O(n) linear space
const largestComponent = (graph) => {
    const visited = new Set();
    let largestSize = -1;
    for(let node in graph){
        if(!visited.has(node)){
            const currSize = getComponentSize(graph, node, visited);
            largestSize = Math.max(currSize, largestSize);
        }
    }
    return largestSize;
};

const getComponentSize = function(graph, startNode, visited = new Set()){
    let size = 0;
    visited.add(startNode);
    size++;
    for(let neighbor of graph[startNode]){
        if(!visited.has(neighbor)){
            size += getComponentSize(graph, neighbor, visited);
        }
    }
    return size;
}

const testG = {
    0 : ['3','5','6'],
    3: ['0','6','1'],
    5: ['0'],
    6: ['0','3'],
    1: ['3']

} // size: 5

// console.log(getComponentSize(testG, '3'));



console.log(largestComponent(givenGraph));