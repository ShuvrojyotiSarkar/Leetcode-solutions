var checkValidString = function(s) {
    let minOpen = 0 , maxOpen = 0;
    for (const c of s){
        minOpen += ((c == '(') << 1 ) - 1;
        maxOpen += ((c != ')') << 1 ) - 1;
        if(maxOpen < 0 ) return false;
        minOpen = Math.max(minOpen,0);
    }
    return minOpen === 0;
};