function factorial(num){
    
    let total = 1;

    for (let i = num; i > 0; i--){
        total *= i;
    }

    return total;
}


console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(10));
console.log(factorial(5));