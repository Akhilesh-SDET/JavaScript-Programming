//String

//String() method is used to convert a value into a string. It can be used to convert a number, boolean, null, undefined, etc. into a string.
let a=String(100);
let b=String(true);
let c=String(79.87798);
let d=String(null);

console.log(typeof d,d);

//Number

//Number() method is used to convert a value into a number. It can be used to convert a string, boolean, null, undefined, etc. into a number.
let e=Number("100")
let f=Number(true);
let g=Number(false);
let h=Number(null);
let i=Number(undefined);
let j=Number("true")
let k=Number("hello");
console.log(typeof k,k);

//other way to conver in number by using + and - symbool
let aa= +"100"
console.log(aa)//100
let bb=+true
console.log(bb)//1
console.log(typeof bb,bb)//Number,1

console.log(10+ +"8"+7)//25
console.log(10+"8"+7)//1087

//falsy value

console.log(Boolean(0))
console.log(Boolean(false))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(""))
console.log(Boolean(NaN))

//truthy value
console.log(Boolean("Hello"))
console.log(Boolean(100))
console.log(Boolean(" "))
console.log(Boolean(true))
console.log(Boolean(342))

console.log(Boolean(0 && "Hello"))
console.log(Boolean("Hi" && "Hello"))
console.log(Boolean("Hi" && NaN))
console.log(Boolean(null && NaN))

// || Or operator
console.log(Boolean(null || NaN))
console.log(Boolean("Hello" || NaN))
console.log(Boolean("false" || 100))
console.log("false" || "100")
