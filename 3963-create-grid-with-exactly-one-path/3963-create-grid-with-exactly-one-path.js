var createGrid = function(m, n) {
    let result = [];
    
    result.push('.'.repeat(n));
    
    for (let i = 1; i < m; i++) {
        let row = '#'.repeat(n - 1) + '.';
        result.push(row);
    }
    
    return result;
};