//Problem: https://structy.net/problems/minimum-island

const grid = 
/* [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]; */ // -> 2

/* [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
];  */ // -> 1


/* [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
]; */  // -> 9

[
    ['W', 'W'],
    ['L', 'L'],
    ['W', 'W'],
    ['W', 'L']
];   // -> 1


//Solution: is a mix of iterative approach (to iterate through cells of the grid) and recursive approach (traverse any island)
//Time complexity : Linear O(r*c), space: Linear O(r*c)
const minimumIsland = function(grid){
    const r = grid.length;
    const c = grid[0].length;
    let minIslandSize = (r*c)+1; // Can use positive infinity Infinity
    const visited = new Set(); // cycle prevention (constant lookup and insertion)
    for(var i = 0; i < r ; i++){
        for(var j = 0; j < c; j++){
            const currSize = getIslandSize(grid,[i,j], visited, r, c);
            minIslandSize = currSize > 0 ? Math.min(currSize, minIslandSize) : minIslandSize;
        }
    }
    return minIslandSize;
};

const getIslandSize = function(grid, nodeCoordinates, visited = new Set(), totalRows, totalCols){
    const [r,c] = nodeCoordinates;
    const rowInBounds = r >= 0 && r < totalRows;
    const colInBounds = c >= 0 && c < totalCols;
    if(!rowInBounds || !colInBounds) return 0;
    const pos = `${r}:${c}`;
    const isWater = grid[r][c] === 'W';
    if( isWater || visited.has(pos)) return 0;
    let size = 1;
    visited.add(pos);
    size += getIslandSize(grid,[r-1,c], visited, totalRows, totalCols);
    size += getIslandSize(grid,[r+1,c], visited, totalRows, totalCols);
    size += getIslandSize(grid,[r,c-1], visited, totalRows, totalCols);
    size += getIslandSize(grid,[r,c+1], visited, totalRows, totalCols);
    return size;
};

const visited = new Set();
const testGrid = [
    ['L','W'],
    ['W', 'L']
];

// console.log(getIslandSize(testGrid,[0,0], visited, 2,2 ));

console.log(minimumIsland(grid));