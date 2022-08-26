//Problem: Shortest path https://structy.net/problems/shortest-path

const edges = 
/* [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]; */ // 'w' > 'z' = 2

/* [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]; */ // 'y' > 'x' = 1

[
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
]; //'b'> 'g' =  -1

//BFS , since we only have to traverse the graph once, linear complexity Time= O(e), space = O(n)
const shortestPath = function(edges, nodeA, nodeB){
    const graph = generateUndirectedGraph(edges);
    const queue = [[nodeA,0]];
    const visited = new Set();
    while(queue.length > 0){
        const current = queue.shift();
        if(current[0] === nodeB){
            return current[1];
        }
        visited.add(current[0]);
        graph[current[0]].forEach(neighbor => {
            if(!visited.has(neighbor)){
                queue.push([neighbor, current[1]+1]);
            }
        }); 
    }
    return -1;
};

const generateUndirectedGraph = function(edges){
    const graph = {};
    for(let edge of edges){
        [node1, node2] = edge;
        !graph[node1] ? graph[node1] = [] : undefined;
        !graph[node2] ? graph[node2] = [] : undefined;
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    return graph;
}


// console.log(generateUndirectedGraph(edges));
console.log(shortestPath(edges, 'b', 'g'));