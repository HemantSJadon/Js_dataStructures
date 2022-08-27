//Problem: https://structy.net/problems/island-count

//Takes input as a grid (r = number of rows, c = number of cols)

//Common gathca: storing reference type (non-primitive data type) , in that case it checks for reference equality

//Solution: iterative approach to leap through nodes of grids, recursive to traverse dfs to explore a node

//Time complexity: since the grid needs to be traversed only once : Linear, O(r*C), space: O(r*c) to store during dfs, visited info
const grid = 
/* [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]; */ // -> 3

[
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
];  // -> 4

/* [
    ['W', 'W'],
    ['W', 'W'],
    ['W', 'W'],
]; */ // -> 0

/* [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
];  */ // -> 1

const islandCount = function(grid){
    const r = grid.length;
    const c = grid[0].length;
    const visited = new Set(); //cycle prevention
    let islandCount = 0;
    for(var i = 0; i < r; i++){
        for(var j = 0; j < c; j++){
            islandCount += (explore_dfs(grid,[i,j], visited, r, c) ? 1 : 0);
        }
    }
    return islandCount;
};

const explore_dfs = function(grid, nodeCoordinates, visited = new Set(), totalRows, totalCols){
    const [nodeRowNum , nodeColNum] = nodeCoordinates;
    const rowInBounds = nodeRowNum >= 0 && nodeRowNum < totalRows;
    const colInBounds = nodeColNum >= 0 && nodeColNum < totalCols;
    if(!rowInBounds || !colInBounds){
        return false;
    }
    const pos = `${nodeRowNum}:${nodeColNum}`;
    if(grid[nodeRowNum][nodeColNum] === 'W' || visited.has(pos)) return false;

    visited.add(pos);

    explore_dfs(grid, [nodeRowNum-1, nodeColNum], visited, totalRows, totalCols);
    explore_dfs(grid, [nodeRowNum+1, nodeColNum], visited, totalRows, totalCols);
    explore_dfs(grid, [nodeRowNum, nodeColNum-1], visited, totalRows, totalCols);
    explore_dfs(grid, [nodeRowNum, nodeColNum +1], visited, totalRows, totalCols);

    return true;
}

// console.log(grid.length);
// console.log(grid[0][0]);


// const visited = {};//new Set();
// const testGrid = [
//     ['L','W'],
//     ['L', 'W']
// ];
// explore_dfs(testGrid, [0,0], visited, 2,2);
// console.log(visited);

console.log(islandCount(grid));