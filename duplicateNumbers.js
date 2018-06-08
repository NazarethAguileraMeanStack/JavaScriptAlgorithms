

function hasDuplicates(dataArray){
    let testArray = dataArray.sort();
    for (let i = 0; i < dataArray.length; i++)
    {
        if (testArray[i] == testArray[i+1])
        {
            return true;
        }
    }

    return false;
}


console.log(hasDuplicates([1,2,3,4,2]));
console.log(hasDuplicates([1,2,3,4,5,6,7,8]));
console.log(hasDuplicates([3,7,5,8,4,8,4,6,3]));
console.log(hasDuplicates([3,7,8,4,2]));