function fizzbuzz(num){
    if (num >= 3 && num % 3 == 0 && num % 5 == 0){
        return "fizzbuzz";
    }
    else if (num >=3 && num % 3 == 0){
        return "fizz";
    }
    else if (num >= 3 && num % 5 == 0){
        return "buzz";
    } else {
        return "";
    }

}

console.log(fizzbuzz(1));
console.log(fizzbuzz(2));
console.log(fizzbuzz(3));
console.log(fizzbuzz(4));
console.log(fizzbuzz(8));
console.log(fizzbuzz(10));
console.log(fizzbuzz(15));
