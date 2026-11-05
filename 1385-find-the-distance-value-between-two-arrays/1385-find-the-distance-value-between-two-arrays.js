var findTheDistanceValue = function(arr1, arr2, d) {
    
    let c = 0;
    for(let i = 0; i < arr1.length; i++){
        let f = 0;
        for(let j = 0; j < arr2.length; j++){
            if(Math.abs(arr1[i] - arr2[j]) <= d){
                f = 1;
                break;
            }
        }
        if(f !== 1)
                c += 1;
    }
    return c;
};