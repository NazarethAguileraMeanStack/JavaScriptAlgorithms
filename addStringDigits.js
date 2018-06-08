

function addStringDigits(strNums){
    let strNumsArray = strNums.split("").map((element)=>{return parseInt(element)}).reduce((total, nums)=>{return total + nums});

    return strNumsArray;

}

console.log(addStringDigits("48"));
console.log(addStringDigits("34"));
console.log(addStringDigits("29"));
console.log(addStringDigits("99"));