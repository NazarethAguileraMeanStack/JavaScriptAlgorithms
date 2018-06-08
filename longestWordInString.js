function longestWord(str){
    let longestWord = str.split(" ").sort((a,b)=>{return a.length < b.length});
    return longestWord[0].length;
}


console.log(longestWord("Hello my name is Bob"));
console.log(longestWord("I am a coding god"));
console.log(longestWord("Keep calm and code on"));
console.log(longestWord("simple way to test for longest word"));
console.log(longestWord("Too cool for school"));