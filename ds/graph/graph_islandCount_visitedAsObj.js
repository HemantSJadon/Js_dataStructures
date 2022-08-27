//Problem: https://structy.net/problems/island-count

//Takes input as a grid (r = number of rows, c = number of cols)

const grid = 
/* [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]; */ // -> 3

/* [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
]; */ // -> 4

[
    ['W', 'W'],
    ['W', 'W'],
    ['W', 'W'],
]; // -> 0

const islandCount = function(grid){
    const r = grid.length;
    const c = grid[0].length;
    const visited = {}; //cycle prevention
    let islandCount = 0;
    for(var i = 0; i < r; i++){
        for(var j = 0; j < c; j++){
            if(grid[i][j] === 'W' || (visited[i] && visited[i].has(j))) continue;
            explore_dfs(grid,[i,j], visited, r, c);
            islandCount++;
        }
    }
    return islandCount;
};

const explore_dfs = function(grid, nodeCoordinates, visited , totalRows, totalCols){
    const [nodeRowNum , nodeColNum] = nodeCoordinates;
    !visited[nodeRowNum] ? visited[nodeRowNum] = new Set() : undefined;
    visited[nodeRowNum].add(nodeColNum);
    const validNeightborCoords = [];
    nodeRowNum > 0 && grid[nodeRowNum-1][ nodeColNum] === 'L' && ( !visited[nodeRowNum -1]  ||  !visited[nodeRowNum -1].has(nodeColNum) ) ? validNeightborCoords.push([nodeRowNum-1, nodeColNum]) : undefined;
    nodeRowNum < totalRows-1 && grid[nodeRowNum + 1][ nodeColNum] === 'L'  && ( !visited[nodeRowNum +1]  ||  !visited[nodeRowNum +1].has(nodeColNum) )? validNeightborCoords.push([nodeRowNum + 1, nodeColNum]) : undefined;
    nodeColNum > 0 && grid[nodeRowNum][ nodeColNum-1] === 'L'  && !visited[nodeRowNum].has(nodeColNum-1)? validNeightborCoords.push([nodeRowNum, nodeColNum-1]) : undefined;
    nodeColNum < totalCols -1 && grid[nodeRowNum][ nodeColNum + 1] === 'L'  && !visited[nodeRowNum].has(nodeColNum+1)? validNeightborCoords.push([nodeRowNum, nodeColNum + 1]) : undefined;
    validNeightborCoords.forEach(n => {
        explore_dfs(grid, n, visited, totalRows, totalCols);
    })
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