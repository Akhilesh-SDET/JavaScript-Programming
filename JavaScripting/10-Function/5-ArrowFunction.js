//Arrow Function--->function expression which have anonymous function along with arrow symbool

//syntax

/*
let a=(parameter)=>{

}
    */

let b=()=>{
    console.log("I Am Arrow Function");
}
b();

//Explicit Return
let c= (a,b)=>{
    return a+b;
}
console.log(c(5,3));


//implicit return 
//when we remove {} and use only on operation for arrow function that time arrow function
//  return the value without write return keyword implicitly
// implicit return possible only for single paramet or no parameter arrow function

let name=(n)=>n

console.log("Vikash");

//==============================for single parameter we can also remove '()'====================
let name2= x=>x;
console.log(name2("Vikash"));
