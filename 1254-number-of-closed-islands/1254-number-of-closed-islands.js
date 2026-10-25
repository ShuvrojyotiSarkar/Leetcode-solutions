var closedIsland = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    function dfs(r, c) {
        if( r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 1)
            return;
        grid[r][c] = 1 ;
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }
    // Step 1: Sink all 0s connected to the top and bottom borders
    for (let c = 0; c < cols; c++) {
        if (grid[0][c] === 0) dfs(0, c);
        if (grid[rows - 1][c] === 0) dfs(rows - 1, c);
    }
    
    // Step 1 (continued): Sink all 0s connected to the left and right borders
    for (let r = 0; r < rows; r++) {
        if (grid[r][0] === 0) dfs(r, 0);
        if (grid[r][cols - 1] === 0) dfs(r, cols - 1);
    }
    
    // Step 2: Count remaining closed islands in the inner grid
    let closedCount = 0;
    for (let r = 1; r < rows - 1; r++) {
        for (let c = 1; c < cols - 1; c++) {
            if (grid[r][c] === 0) {
                closedCount++; // Found a closed island!
                dfs(r, c);     // Sink it so we don't count its parts again
            }
        }
    }
    
    return closedCount;
};