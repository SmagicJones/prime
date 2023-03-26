// Adding a commient to the top 

function isPrime(number){
    if(number < 2){
        return false;
    }

    for(let i = 2; i < number; i++){
        if(number % i === 0){
            console.log(number % i);
            return false;
        }
    }
    return true;
}

// Adding a comment to the bottom

isPrime(16);
