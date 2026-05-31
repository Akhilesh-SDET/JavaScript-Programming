//FunctionExpression----> when a variable store anonymous function as value is 
// know as function expression

//Example
let a= function (){
    console.log("Function Expression")
}
a();

//way of calling of function Expression
//1. a()
//2.()--->make it immediate below line to call fn expression
//3.function expression never call with function name

let b= function mul(x,y){
    console.log(x*y);
}
//mul(7,6)---> not possible to call function expression with fn name 
b(7,6);
