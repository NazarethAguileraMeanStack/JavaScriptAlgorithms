



console.log(Math.PI);
console.log(Math.round(1.5));
console.log(Math.pow(2,3));
console.log(Math.sqrt(25));
console.log(Math.abs(-777));
console.log(Math.ceil(8.0000000000001));
console.log(Math.floor(9.9999999999));
console.log(Math.min(1,-2,3,-4,5,-6,7,8));
console.log(Math.max(1,2,3,4,5,-7));
console.log(Math.E);



function inRange(x,y){
    let test = Math.floor(Math.random() * y)
    if ((test) <= x){
        return inRange(x,y);
    } else {
        return test;
    }
}

console.log(inRange(1,10));