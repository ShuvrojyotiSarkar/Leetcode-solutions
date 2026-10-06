var minAddToMakeValid = function(s) {
    let balance = 0;
    let answer = 0;
    for (let c of s ){
        if( c === '('){
            balance += 1;
        }
        else {
            balance -= 1;
            if (balance < 0){
                answer += 1;
                balance = 0;
            }
        }
    }
    answer += balance;
    return answer;
};