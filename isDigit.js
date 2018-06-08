function isDigit(str){
    

    return !(isNaN(parseInt(str)));

    
}

console.log(isDigit("1"));
console.log(isDigit("33"));
console.log(isDigit("@*()#*"));
console.log(isDigit("javascript"));
console.log(isDigit("89"))