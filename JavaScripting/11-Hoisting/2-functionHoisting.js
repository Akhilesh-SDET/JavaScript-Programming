//hoisting is not possible in function Expression

//Hoisting in function Decleration
greet();
function greet(){
    console.log("Hello");
}

//Hoisting in Function Expression

display()
let display = function(){
    console.log("Hello");
}
