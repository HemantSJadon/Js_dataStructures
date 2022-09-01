/* Problem: 
Say that you are a traveler on a 2D grid. You begin in the
top-left corner and your goal is to travel to the bottom-right
corner. You may only move down or right.

In how many ways can you travel to the goal on a grid with
dimensions m * n?

Write a function 'gridTraveler(m, n)' that calculates this.
*/

const test1 = () => {
    const m = 3;
    const n = 3;
    console.log(`calculating how many ways to travel the grid of size ${m}*${n} for top-left to bottom-right..
    only allowed moves are down or right`);

    console.time("gridTraveler");
    console.log(gridTraveler(m,n));
    console.timeEnd("gridTraveler");
}

//the entire grid will be traversed only once cell by cell
//at each cell traversal, constant time operations
//complexity: linear
//time complexity: O(m*n) total cells
//space: O(m*n) size of the grid
const gridTraveler = function(m,n){
    const grid = new Array(m+1).fill().map(() => new Array(n+1).fill(0));
    grid[1][1] = 1;
    for(var i = 0; i <= m; i++){
        for(var j = 0; j <= n; j++){
            const current = grid[i][j];
            if(j+1 <= n) grid[i][j+1] += current;
            if(i+1 <= m) grid[i+1][j] += current;
        }
    }
    return grid[m][n];
}

test1();