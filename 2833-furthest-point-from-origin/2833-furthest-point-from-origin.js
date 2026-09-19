var furthestDistanceFromOrigin = function(moves) {
    let left = 0;
    let right = 0;
    let _ = 0;

    for(let move of moves){
        if(move == 'L'){
            left++;
        }else if(move == 'R'){
            right++;
        }else {
                _++;
            }
    }

    return Math.abs(right - left) + _ ;
};