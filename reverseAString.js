function reverseAString(word){
    let reverseWord = word.split("").reverse().join("");
    return reverseWord;
}


console.log(reverseAString("Hello"));
console.log(reverseAString("JavaScript"));
console.log(reverseAString("hmmmm"));
console.log(reverseAString("Nazareth"));
console.log(reverseAString("Lets see how this works"));