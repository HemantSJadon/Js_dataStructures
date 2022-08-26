//adjacency list representation of graph
const givenGraph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};

//breadth first uses a queue. So will have an iterative implementation only

const breadthFirstTraversal_iterative = function(graph, source){
    let traversed = [];
    const queue = [source];
    while(queue.length > 0){
        const current = queue.shift();
        traversed.push(current);
        graph[current].forEach(neighbor => {
            queue.push(neighbor);
        });
    }
    return traversed;
}

const bfs = breadthFirstTraversal_iterative(givenGraph,'a');
console.log(bfs);