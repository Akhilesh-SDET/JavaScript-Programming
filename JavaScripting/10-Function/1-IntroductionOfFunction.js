/*
Function->Function is a reusable block of code that performs a specific task when it is called.
Type:
1.Function Decleratio
2.Function Expression
3.arrow function
*/
function main(){
   console.log("Hello");
}
main();

//------------------------Addition of Two Number---------------------------
function add(par1,par2){
    console.log(par1+par2);
}
add(2,6);


//-----------------------return keyword-----------------
function add2(par1,par2){
    return a+b;
}
let x=add2(2,6);
console.log(x)

//----------------------------general q--------------------
function add(a, b) { }   // Parameters
add(10, 20);             // Arguments

//---------------------------------------------------------
function test(){
    console.log(100);
}

let x = test();

console.log(x);