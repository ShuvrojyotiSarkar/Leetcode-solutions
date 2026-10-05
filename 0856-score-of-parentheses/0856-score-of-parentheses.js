var scoreOfParentheses = function(s) {
    let stack = [0];

    for (const c of s)
    {
        if (c === '(')
            stack.push(0);
        else {
            let inside = stack.pop();
            let score = inside === 0 ? 1 : 2 * inside;
            stack[stack.length - 1] += score;
        }
    }
    return stack[0];
};