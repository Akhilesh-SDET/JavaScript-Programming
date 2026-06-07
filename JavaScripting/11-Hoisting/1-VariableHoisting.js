//variable Hoisting
console.log(str)//undefined
var str="Hello";

console.log(a)//error
let a=20;

console.log(b);
const b=20;

console.log(b);//error (b/z of TDZ)

