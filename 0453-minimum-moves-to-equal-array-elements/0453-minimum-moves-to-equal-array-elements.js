var minMoves = function(nums) {
    const min = Math.min(...nums);
    const sum = nums.reduce((a, b) => a + b, 0);

    return sum - nums.length * min;
};