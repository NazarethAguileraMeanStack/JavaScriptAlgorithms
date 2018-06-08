
function missingNumber(numbersArray){
    let testArray = numbersArray.sort();
    console.log(testArray);
    let total = 0;

    for (let i = testArray[testArray.length - 1]; i > 0; i--)
    {
        total += i;
    }

    let testArray2 = testArray.reduce((total, num)=>{return total + num});

    if (Math.abs(total - testArray2) == 0){
        return "Nothing Missing"
    } else {
        return Math.abs(total - testArray2);
    }

}


console.log(missingNumber([5,4,3,1,0]));
console.log(missingNumber([0,1,3,4,5,6,7,8,9]));
console.log(missingNumber([0,1,2,3,5,6,7]));
console.log(missingNumber([0,1,2,3,4,5,6,8,9]));