const givenGraph = {
    a: ['c','b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};

//for iterative implementation: we use an explicit stack
const depthFirstTraversal_iterative = function(graph, source){
    let result = [];
    const stack = [source];
    while(stack.length > 0){
        let current = stack.pop();
        result.push(current);
        graph[current].forEach(neighbor => {
            stack.push(neighbor);
        });
    }
    return result;
}

//recursive implementation uses the function call stack
const depthFirstTraversal_recursive = function(graph, source, traversed = []){
    traversed.push(source);
    for(let neighbor of graph[source]){
        depthFirstTraversal_recursive(graph, neighbor, traversed);
    }
    return traversed;
}

const dfs = depthFirstTraversal_iterative(givenGraph,'a');
console.log(dfs);

const dfs_recursive = depthFirstTraversal_recursive(givenGraph, 'a');
console.log(dfs_recursive);

