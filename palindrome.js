function isPalindrome(word){
    let forwards = word.toLowerCase().replace(/[\W_]/g, "");
    let backwards = word.toLowerCase().split("").reverse().join("").replace(/[\W_]/g, "");

    if (forwards === backwards){
        return true;
    }
    return false;
}


console.log(isPalindrome("hello"));
console.log(isPalindrome("Mom"));
console.log(isPalindrome("Bob"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome(".0_0 ( : / - \ :) 0-0"));