// Problem:https://structy.net/problems/has-path

//Given a directed acyclic graph
const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

//Time complexity: O(e) where e is number of edges (we can traverse the graph only along the edges), space : O(n) ,maximum all the nodes can be stored in the stack (next option to be visited)
const hasPath_iterative = function(graph, source, destination) {
    const stack = [source];
    const visited = [];
    while(stack.length > 0){
        let current = stack.pop();
        if(current === destination){
            return true;
        }
        visited.push(current);
        graph[current].forEach(neighbor => {
            //only push to stack the neighbor which have not been visited yet
            if(visited.indexOf(neighbor) === -1){
                stack.push(neighbor);
            }
        })
    }
    return false;

}
const hasPath_recursive = function(graph, source, destination, visited = []){
    if(source === destination){
        return true;
    }
    visited.push(source);
    for(let neighbor of graph[source]){
        if(visited.indexOf(neighbor) === -1){
            if(hasPath_recursive(graph, neighbor, destination, visited)){
                return true;
            }
        }
    }
    return false;
} 


const hasPath_bfs = function(graph, source, destination){
    const queue = [source];
    const visited =[];
    while(queue.length > 0){
        let current = queue.shift();
        if(current === destination){
            return true;
        }
        visited.push(current);
        graph[current].forEach(neighbor => {
            if(visited.indexOf(neighbor) === -1){
                queue.push(neighbor);
            }
        });
    }
    return false;
}


console.log(hasPath_iterative(graph, 'f','j'));
console.log(hasPath_recursive(graph, 'f','k'));

console.log(hasPath_bfs(graph, 'f','k'));
console.log(hasPath_bfs(graph, 'f','k'));


  