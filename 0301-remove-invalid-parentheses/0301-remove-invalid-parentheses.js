var removeInvalidParentheses = function(s) {
    let removeLeft = 0;
    let removeRight = 0;

    for (let c of s) {
        if (c === '(') {
            removeLeft++;
        } else if (c === ')') {
            if (removeLeft > 0) {
                removeLeft--;
            } else {
                removeRight++;
            }
        }
    }

    let answer = new Set();

    function dfs(index, current, balance, left, right) {
        if (index === s.length) {
            if (balance === 0 && left === 0 && right === 0) {
                answer.add(current);
            }
            return;
        }

        let c = s[index];

        if (c === '(' && left > 0) {
            dfs(index + 1, current, balance, left - 1, right);
        }

        if (c === ')' && right > 0) {
            dfs(index + 1, current, balance, left, right - 1);
        }

        if (c === '(') {
            dfs(index + 1, current + c, balance + 1, left, right);
        } else if (c === ')') {
            if (balance > 0) {
                dfs(index + 1, current + c, balance - 1, left, right);
            }
        } else {
            dfs(index + 1, current + c, balance, left, right);
        }
    }

    dfs(0, "", 0, removeLeft, removeRight);

    return [...answer];
};