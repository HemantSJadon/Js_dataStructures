//undirected path: https://structy.net/problems/undirected-path

// Edges are given for an undirected graph
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];


//time complexity: O(e), space complexity: O(n)
const undirectedPath = function (edges, nodeA, nodeB) {
  const graph = generateUndirectedGraphFromEdges(edges);
  const stack = [nodeA];
  const visited = new Set();
  while (stack.length > 0) {
    let current = stack.pop();
    if (current === nodeB) {
      return true;
    }
    visited.add(current);
    graph[current].forEach(neighbor => {
      if (!visited.has(neighbor)) { //checking whether something exists in set or not is constant time operation in JS
        stack.push(neighbor);
      }
    });
  }
  return false;

}


//recursive solution, time complexity: O(e), space complexity: O(n)
const undirectedPath_recursive = function (edges, nodeA, nodeB) {
  const graph = generateUndirectedGraphFromEdges(edges);
  const hasUndirectedPath = function(graph, source, dest, visited = new Set()){
    if(source === dest){
      return true;
    }
    visited.add(source);
    let neighbors = graph[source].filter(n => !visited.has(n));
    for(let neighbor of neighbors){
      if(hasUndirectedPath(graph, neighbor, dest, visited)){
        return true;
      }
    }
    return false;
  }
  const visited = new Set();
  return hasUndirectedPath(graph, nodeA, nodeB, visited);

}

const generateUndirectedGraphFromEdges = function (edges) {
  let graph = {};
  for (let edge of edges) {
    const [node1, node2] = edge;
    //another way to check whether node1 is in graph : (node1 in graph)
    // !graph[node1] ? (graph[node1] = [node2]) : (graph[node1].push(node2));
    // !graph[node2] ? (graph[node2] = [node1]) : (graph[node2].push(node1));
    !(node1 in graph) ? (graph[node1] = []) : undefined;
    !(node2 in graph) ? (graph[node2] = []) : undefined;
    graph[node1].push(node2);
    graph[node2].push(node1);
  }
  return graph;
}

const graph = generateUndirectedGraphFromEdges(edges);
console.log(graph);

console.log(undirectedPath(edges, 'i', 'n'));
console.log(undirectedPath(edges, 'l', 'j'));

console.log(undirectedPath_recursive(edges, 'i', 'n'));
// console.log(undirectedPath_recursive(edges, 'l', 'j'));
