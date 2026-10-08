const removeOuterParentheses = s => {
    let res = '', lvl = 0;

    for (const c of s)
        if (c === '(' ? lvl++ : --lvl)
            res += c;

    return res;
};