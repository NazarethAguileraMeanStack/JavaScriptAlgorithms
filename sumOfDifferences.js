


function sumOfDifferences(num1, num2){
    let maxValue = Math.max(num1, num2);
    let minValue = Math.min(num1, num2);

    total = 0;
    for (let i = minValue; i <= maxValue; i++)
    {
        total += i;
    }

    return total;
}


console.log(sumOfDifferences(10, 5));
console.log(sumOfDifferences(3, 7));
console.log(sumOfDifferences(22, 17));
console.log(sumOfDifferences(20, 22));


