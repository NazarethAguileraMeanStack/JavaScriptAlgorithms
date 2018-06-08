function repeatWord(word, numOfRepeats){
    let finalString = "";
    for (let i = numOfRepeats; i > 0; i--){
        finalString += word;
    }

    return finalString;
}


console.log(repeatWord("Google", 4));
console.log(repeatWord("Facebook", 2));
console.log(repeatWord("JavaScript", 3));
console.log(repeatWord("Coding", 5));
console.log(repeatWord("Hello", 0));